function getURLVar(key) {
  var value = [];
  var query = String(document.location).split("?");
  if (query[1]) {
    var part = query[1].split("&");
    for (i = 0; i < part.length; i++) {
      var data = part[i].split("=");
      if (data[0] && data[1]) {
        value[data[0]] = data[1];
      }
    }
    if (value[key]) {
      return value[key];
    } else {
      return "";
    }
  }
}
$(document).ready(function () {
  $(".icon-cart-mobile .cartCount").html($("#cart #cart-total").html());

  /* Highlight any found errors */
  $(".text-danger").each(function () {
    var element = $(this).parent().parent();
    if (element.hasClass("form-group")) {
      element.addClass("has-error");
    }
  });
  /* Currency */
  $(".currency .currency-select").on("click", function (e) {
    e.preventDefault();
    $(this)
      .closest(".currency")
      .find(".form-currency input[name='code']")
      .attr("value", $(this).attr("name"));
    $(this).closest(".currency").find(".form-currency").submit();
  });
  /* Language */
  $(".language .language-select").on("click", function (e) {
    e.preventDefault();
    $(this)
      .closest(".language")
      .find(".form-language input[name='code']")
      .attr("value", $(this).attr("name"));
    $(this).closest(".language").find(".form-language").submit();
  });
  /* Search */
  $("#search input[name='search']")
    .parent()
    .find("button")
    .on("click", function (e) {
      e.preventDefault();
      var url = $("base").attr("href") + "product/search";
      var value = $(".header input[name='search']").val(),
        category_id = $(".header select[name='category_id']").val(),
        sub_category = $(".header input[name='sub_category']").val();
      if (category_id !== undefined) {
        url += "&category_id=" + category_id;
      }
      if (sub_category !== undefined) {
        url += "&sub_category=" + sub_category;
      }
      if (value) {
        url += "?search=" + encodeURIComponent(value);
      }
      location = url;
    });
  $("#search input[name='search']").on("keydown", function (e) {
    if (e.keyCode == 13) {
      $("header input[name='search']").parent().find("button").trigger("click");
    }
  });
  /* Product List */
  var list = $("#list-view");
  var grid = $("#grid-view");
  var product_view = $(".category-products .products-view");
  var list_view = $(".category-products .products-view .product-list");
  var gird_view = $(".category-products .products-view .product-grid");
  list.click(function () {
    $(this).parent().find(".button-view-mode").removeClass("active");
    $(this).find(".button-view-mode").addClass("active");
    product_view.removeClass("products-view-grid");
    product_view.addClass("products-view-list");
    gird_view.hide("fast");
    list_view.show("fast");
    localStorage.setItem("display", "list");
  });
  /* Product Grid */
  grid.click(function () {
    $(this).parent().find(".button-view-mode").removeClass("active");
    $(this).find(".button-view-mode").addClass("active");
    product_view.removeClass("products-view-list");
    product_view.addClass("products-view-grid");
    list_view.hide("fast");
    gird_view.show("fast");
    localStorage.setItem("display", "grid");
  });
  if (localStorage.getItem("display") == "list") {
    list.trigger("click");
  } else {
    grid.trigger("click");
  }
  /* Checkout */
  $(document).on(
    "keydown",
    "#collapse-checkout-option input[name='email'], #collapse-checkout-option input[name='password']",
    function (e) {
      if (e.keyCode == 13) {
        $("#collapse-checkout-option #button-login").trigger("click");
      }
    }
  );
});
/* Cart add remove functions */
var cart = {
  add: function (product_id, quantity) {
    $.ajax({
      url: "/checkout/cart/add",
      type: "post",
      data:
        "product_id=" +
        product_id +
        "&quantity=" +
        (typeof quantity != "undefined" ? quantity : 1),
      dataType: "json",
      beforeSend: function () {
        $("#cart > button").button("loading");
      },
      complete: function () {
        $("#cart > button").button("reset");
      },
      success: function (json) {
        if (json["success"]) {
          var number = json["total"].split(" ")[0];
          var cart_total = json["total"].split(" ");
          let products = json["items"];
          let html = "";
          for (let i = 0; i < products.length; i++) {
            var src = "/catalog/view/theme/sfresh/image/no_image.gif";
            if (products[i].thumb.length > 0) {
              src = products[i].thumb;
            }
            html +=
              '<div class="clearfix cart_product productid-' +
              products[i].cart_id +
              '">' +
              '<a class="cart_image" href="' +
              products[i].href +
              '" title="' +
              products[i].name +
              '">' +
              '<img src="' +
              src +
              '" alt="' +
              products[i].name +
              '" >' +
              "</a>" +
              '<div class="cart_info">' +
              '<div class="cart_name">' +
              '<a href="' +
              products[i].href +
              '" title="' +
              products[i].name +
              '">' +
              products[i].name +
              "</a>" +
              "</div>" +
              '<div class="row-cart-left">' +
              '<div class="cart_item_name">' +
              '<label class="cart_size variant-title-popup">' +
              products[i].option_name +
              "</label>" +
              "<div>" +
              '<label class="cart_quantity">Số lượng</label>' +
              '<div class="cart_select">' +
              '<div class="input-group-btn quantity-partent">' +
              '<button class="reduced qtyminus items-count btn-minus btn btn-default" type="button">–</button>' +
              '<input type="text" maxlength="3" min="0" class="input-text number-sidebar item-quantity" name="quantity[' +
              products[i].cart_id +
              ']" size="1" value="' +
              products[i].quantity +
              '">' +
              '<button class="increase qtyplus items-count btn-plus btn btn-default" type="button">+</button></div>' +
              "</div>" +
              "</div>" +
              "</div>" +
              '<div class="text-right cart_prices">' +
              '<div class="cart__price">' +
              '<span class="cart__sale-price">' +
              products[i].price +
              "</span>" +
              "</div>" +
              '<a class="cart__btn-remove remove-item-cart" onclick="cart.remove(' +
              products[i].cart_id +
              ')" href="javascript:void(0)" title="Bỏ sản phẩm">Bỏ sản phẩm</a>' +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>";
          }
          setTimeout(function () {
            $(".cart-empty").length ? $(".cart-empty").remove() : "";
            $(".cart-footer").show();
            $(".count_item_pr").html(number);
            $(".total-price").html(cart_total[cart_total.length - 1]);
            $(".cart_body").html(html);
          }, 100);
          $(".cart_sidebar").toggleClass("active");
          $(".backdrop__body-backdrop___1rvky").addClass("active");
        }
      },
      error: function (xhr, ajaxOptions, thrownError) {
        alert(product_id);
        alert(
          thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText
        );
      },
    });
  },
  update: function (key, quantity) {
    $.ajax({
      url: "/checkout/cart/edit",
      type: "post",
      data:
        "key=" +
        key +
        "&quantity=" +
        (typeof quantity != "undefined" ? quantity : 1),
      dataType: "json",
      beforeSend: function () {
        $("#cart > button").button("loading");
      },
      complete: function () {
        $("#cart > button").button("reset");
      },
      success: function (json) {
        /* console.log("json",json);
                var number = json['total'].split(' ')[0];
                var cart_total = json['total'].split(' ');
                setTimeout(function () {
                    $('.total-price').html(cart_total[cart_total.length-1]);
                    $('.count_item_pr').html(number);
                }, 100);*/
      },
      error: function (xhr, ajaxOptions, thrownError) {
        alert(
          thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText
        );
      },
    });
  },
  remove: function (key) {
    $.ajax({
      url: "/checkout/cart/remove",
      type: "post",
      data: "key=" + key,
      dataType: "json",
      beforeSend: function () {
        $("#cart > button").button("loading");
      },
      complete: function () {
        $("#cart > button").button("reset");
      },
      success: function (json) {
        var number = json["total"].split(" ")[0];
        var cart_total = json["total"].split(" ");
        setTimeout(function () {
          $(".productid-" + key).remove();
          $('.table-cart tbody tr[data-variant-id="' + key + '"]').remove();
          $(".total-price").html(cart_total[cart_total.length - 1]);
          $(".count_item_pr").html(number);
          $(".count-cart span").html(number + " sản phẩm");
          if (number == 0) {
            $(".cart-footer").hide();
            $(
              '<div class="cart-empty">' +
                '<span class="empty-icon"><i class="ico ico-cart"></i></span>' +
                '<div class="btn-cart-empty">' +
                '<a class="btn btn-default" href="/" title="Tiếp tục mua hàng">Tiếp tục mua hàng</a>' +
                "</div>" +
                "</div>"
            ).appendTo(".cart_body");

            $(
              '<div class="expanded-message">' +
                '<p class="cart-empty">Giỏ hàng của bạn đang trống' +
                "</div>"
            ).appendTo("#cartformpage tbody");
          }
        }, 100);
      },
      error: function (xhr, ajaxOptions, thrownError) {
        alert(
          thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText
        );
      },
    });
  },
};
var voucher = {
  add: function () {},
  remove: function (key) {
    $.ajax({
      url: "/checkout/cart/remove",
      type: "post",
      data: "key=" + key,
      dataType: "json",
      beforeSend: function () {
        $("#cart > button").button("loading");
      },
      complete: function () {
        $("#cart > button").button("reset");
      },
      success: function (json) {
        var number = json["total"].split(" ")[0];
        setTimeout(function () {
          $("#cart .cartCount2").html("(" + number + ")");
          $(".count_item.count_item_pr").html(number);
          $(".icon-cart-mobile .cartCount").html(number);
        }, 100);
        if (
          window.location.pathname == "/checkout/cart" ||
          window.location.pathname == "/checkout/checkout"
        ) {
          location = "/checkout/cart";
        } else {
          $(".top-cart-content").load("/common/cart/info .CartHeaderContainer");
        }
      },
      error: function (xhr, ajaxOptions, thrownError) {
        alert(
          thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText
        );
      },
    });
  },
};
var wishlist = {
  add: function (product_id) {
    $.ajax({
      url: "/account/wishlist/add",
      type: "post",
      data: "product_id=" + product_id,
      dataType: "json",
      success: function (json) {
        $(".alert").remove();
        if (json["redirect"]) {
          location = json["redirect"];
        }
        if (json["success"]) {
          /*$('#content').parent().before('<div class="alert alert-success"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>'); */
          /*$('.header_nav_main').before('<div class="container"><div style="max-width: 100%!important" class="alert alert-success"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div></div>');*/
          /* var SuccessText = "Bạn vừa thêm 1 sản phẩm vào mục yêu thích thành công bấm <a style='color:#2196f3' href='/account/wishlist'>vào đây</a> để tới trang yêu thích";*/
          var SuccessText = json["success"];
          SuccessNoti(SuccessText);
        }
        var str = json["total"];
        var number = str.split(" ");
        number = number[number.length - 1];
        number = number.replace("(", "");
        number = number.replace(")", "");

        $(".headerWishlistCount").html(number);
        $("html, body").animate({ scrollTop: 0 }, "slow");
      },
      error: function (xhr, ajaxOptions, thrownError) {
        alert(
          thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText
        );
      },
    });
  },
  remove: function () {},
};
var compare = {
  add: function (product_id) {
    $.ajax({
      url: "/product/compare/add",
      type: "post",
      data: "product_id=" + product_id,
      dataType: "json",
      success: function (json) {
        $(".alert").remove();
        if (json["success"]) {
          /*$('#content').parent().before('<div class="alert alert-success"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>'); */
          $(".header_nav_main").before(
            '<div class="container"><div style="max-width: 100%!important" class="alert alert-success"><i class="fa fa-check-circle"></i> ' +
              json["success"] +
              ' <button type="button" class="close" data-dismiss="alert">&times;</button></div></div>'
          );
          $(".headerCompareCount").html(json["total"]);
          $("html, body").animate({ scrollTop: 0 }, "slow");
        }
      },
      error: function (xhr, ajaxOptions, thrownError) {
        alert(
          thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText
        );
      },
    });
  },
  remove: function () {},
};
/* Agree to Terms */
$(document).delegate(".agree", "click", function (e) {
  e.preventDefault();
  $("#modal-agree").remove();
  var element = this;
  $.ajax({
    url: $(element).attr("href"),
    type: "get",
    dataType: "html",
    success: function (data) {
      html = '<div id="modal-agree" class="modal">';
      html += '  <div class="modal-dialog">';
      html += '    <div class="modal-content">';
      html += '      <div class="modal-header">';
      html +=
        '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
      html += '        <h4 class="modal-title">' + $(element).text() + "</h4>";
      html += "      </div>";
      html += '      <div class="modal-body">' + data + "</div>";
      html += "    </div";
      html += "  </div>";
      html += "</div>";
      $("body").append(html);
      $("#modal-agree").modal("show");
    },
  });
});
/* Autocomplete */
(function ($) {
  $.fn.autocomplete = function (option) {
    return this.each(function () {
      this.timer = null;
      this.items = new Array();
      $.extend(this, option);
      $(this).attr("autocomplete", "off");
      /* Focus */
      $(this).on("focus", function () {
        this.request();
      });
      /* Blur */
      $(this).on("blur", function () {
        setTimeout(
          function (object) {
            object.hide();
          },
          200,
          this
        );
      });
      /* Keydown */
      $(this).on("keydown", function (event) {
        switch (event.keyCode) {
          case 27 /* escape */:
            this.hide();
            break;
          default:
            this.request();
            break;
        }
      });
      /* Click */
      this.click = function (event) {
        event.preventDefault();
        value = $(event.target).parent().attr("data-value");
        if (value && this.items[value]) {
          this.select(this.items[value]);
        }
      };
      /* Show */
      this.show = function () {
        var pos = $(this).position();
        $(this)
          .siblings("ul.dropdown-menu")
          .css({
            top: pos.top + $(this).outerHeight(),
            left: pos.left,
          });
        $(this).siblings("ul.dropdown-menu").show();
      };
      /* Hide */
      this.hide = function () {
        $(this).siblings("ul.dropdown-menu").hide();
      };
      /* Request */
      this.request = function () {
        clearTimeout(this.timer);
        this.timer = setTimeout(
          function (object) {
            object.source($(object).val(), $.proxy(object.response, object));
          },
          200,
          this
        );
      };
      /* Response */
      this.response = function (json) {
        html = "";
        if (json.length) {
          for (i = 0; i < json.length; i++) {
            this.items[json[i]["value"]] = json[i];
          }
          for (i = 0; i < json.length; i++) {
            if (!json[i]["category"]) {
              html +=
                '<li data-value="' +
                json[i]["value"] +
                '"><a href="#">' +
                json[i]["label"] +
                "</a></li>";
            }
          }
          /* Get all the ones with a categories */
          var category = new Array();
          for (i = 0; i < json.length; i++) {
            if (json[i]["category"]) {
              if (!category[json[i]["category"]]) {
                category[json[i]["category"]] = new Array();
                category[json[i]["category"]]["name"] = json[i]["category"];
                category[json[i]["category"]]["item"] = new Array();
              }
              category[json[i]["category"]]["item"].push(json[i]);
            }
          }
          for (i in category) {
            html +=
              '<li class="dropdown-header">' + category[i]["name"] + "</li>";
            for (j = 0; j < category[i]["item"].length; j++) {
              html +=
                '<li data-value="' +
                category[i]["item"][j]["value"] +
                '"><a href="#">&nbsp;&nbsp;&nbsp;' +
                category[i]["item"][j]["label"] +
                "</a></li>";
            }
          }
        }
        if (html) {
          this.show();
        } else {
          this.hide();
        }
        $(this).siblings("ul.dropdown-menu").html(html);
      };
      $(this).after('<ul class="dropdown-menu"></ul>');
      $(this)
        .siblings("ul.dropdown-menu")
        .delegate("a", "click", $.proxy(this.click, this));
    });
  };
})(window.jQuery);
/***Update Cart***/
$(document).on("click", ".qtyplus", function (e) {
  e.preventDefault();
  var input = $(this).parent(".quantity-partent").find("input");
  var currentVal = parseInt(input.val());
  if (!isNaN(currentVal)) {
    input.val(currentVal + 1);
  } else {
    input.val(1);
  }
  UpdateTotalProducts();
});
$(document).on("click", ".qtyminus", function (e) {
  e.preventDefault();
  var input = $(this).parent(".quantity-partent").find("input");
  var currentVal = parseInt(input.val());
  if (!isNaN(currentVal) && currentVal > 1) {
    input.val(currentVal - 1);
  } else {
    input.val(1);
  }
  UpdateTotalProducts();
});
$(document).ready(function () {
  $("input.item-quantity").on("input", function (e) {
    var input = $(this);
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal) && currentVal >= 1) {
      input.val(currentVal);
    } else {
      input.val(1);
    }
    UpdateTotalProducts();
  });
});
function UpdateTotalProducts() {
  $.ajax({
    type: "POST",
    url: "/checkout/cart/getTotalProductInCart",
    data: $("#cartformpage").serialize(),
    dataType: "json",
    beforeSend: function () {},
    complete: function () {},
    success: function (data) {
      $(".count_item_pr").html(data.number);
      $(".total-price").html(data.total_price);
    },
    error: function (XMLHttpRequest, textStatus) {},
  });
}
