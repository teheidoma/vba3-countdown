// Custom Script
// Developed by: Samson.Onna
// CopyRights : http://webthemez.com

/*
Theme by: WebThemez.com 
*/
$(function () {
    let endDate = "September 17, 2022 15:03:25";

    $('.countdown.simple').countdown({date: endDate});

    $('.countdown.styled').countdown({
        date: endDate,
        render: function (data) {
            $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>дней</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>часов</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>минут</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>секунд</span></div>");
        }
    });

    $('.countdown.callback').countdown({
        date: +(new Date) + 10000,
        render: function (data) {
            $(this.el).text(this.leadingZeros(data.sec, 2) + " секунд");
        },
        onEnd: function () {
            $(this.el).addClass('ended');
        }
    }).on("click", function () {
        $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
    });


});
