jQuery(function ($) {
    $('.container_widget .widget-right .row1').on('click', function () {
        $('.write-a-review-form').slideDown();
    })

    $('.write-a-review-form #btn_cancel').on('click', function (e) {
        e.preventDefault();
        $('.write-a-review-form').slideUp();
    })

    $(function () {

        $(".rateYo").rateYo({
            normalFill: "#EBEBEE",
            starWidth: "30px",
            spacing   : "5px",
            fullStar: true,
            multiColor: {
                "startColor": "#ee2f18", //RED
                "endColor": "#00c487" //GREEN
            },
            'starSvg': '<svg width="39px" height="39px" viewBox="0 0 26 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#EBEBEE"><g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd"><g id="Smart-Reviews-Web-Company-Page-v4" transform="translate(-674.000000, -486.000000)"><g id="Review/Medium/Average" transform="translate(634.000000, 440.000000)"><g id="Group-22"><g id="Group-21"><g id="Group-5" transform="translate(38.101025, 44.000000)"><g id="icn/status/average" transform="translate(2.000000, 2.000000)"><g id="icn_status_average"><rect id="Rectangle" x="0" y="0" width="26" height="17.2499996" rx="2.29999995"></rect></g></g></g></g></g></g></g></g></svg>'
        });
        
        $(".rateYo_small").rateYo({
            normalFill: "#EBEBEE",
            starWidth: "20px",
            spacing   : "5px",
            fullStar: true,
            multiColor: {
                "startColor": "#ee2f18", //RED
                "endColor": "#00c487" //GREEN
            },
            'starSvg': '<svg width="39px" height="39px" viewBox="0 0 26 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#EBEBEE"><g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd"><g id="Smart-Reviews-Web-Company-Page-v4" transform="translate(-674.000000, -486.000000)"><g id="Review/Medium/Average" transform="translate(634.000000, 440.000000)"><g id="Group-22"><g id="Group-21"><g id="Group-5" transform="translate(38.101025, 44.000000)"><g id="icn/status/average" transform="translate(2.000000, 2.000000)"><g id="icn_status_average"><rect id="Rectangle" x="0" y="0" width="26" height="17.2499996" rx="2.29999995"></rect></g></g></g></g></g></g></g></g></svg>'
        });

    });

});
