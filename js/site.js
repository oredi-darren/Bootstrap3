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
})();