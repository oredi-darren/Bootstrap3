/**
 * Created by dseet on 5/14/2014.
 */
(function(){
    "use strict";

    var $pickButton = $("#pickButton");
    $("#reasonDropdown li a").on("click", function () {
        var reason = $(this).text();
        $pickButton.text(reason);
    });

    var $sentDialog = $("#sentDialog");
    $('#contactForm').on("submit", function () {
        $sentDialog.modal('show');
        return false;
    });

    var sentAlert = $('#sentAlert');

    $sentDialog.on('hidden.bs.modal', function () {
        sentAlert.show();
    });

    $('#contactForm input[type=submit]').tooltip({
        delay: {
            show: 500,
            hide: 0
        }
    });

    sentAlert.on('close.bs.alert', function () {
        sentAlert.hide();
        return false;
    });

    $('#theCarousel').carousel();
})();