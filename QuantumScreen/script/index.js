function generateOptions(list) {
    var res = '';
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var item = list_1[_i];
        res += "<option value=\"".concat(item, "\">").concat(item, "</option>");
    }
    return res;
}
var renderCard = function () {
    var display = document.querySelector('.card-display');
    var courseCount = document.getElementById('courseCount');
    var datalist = fetch('/script/data.json')
        .then(function (data) { return data.json(); })
        .then(function (datalist) {
        courseCount.innerText = datalist.length;
        for (var _i = 0, datalist_1 = datalist; _i < datalist_1.length; _i++) {
            var data = datalist_1[_i];
            var card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML += "\n        \n                    ".concat(data.isAlive ? '' : "<span class=\"expireTag\">EXPIRED</span>", "\n                    <img src=\"").concat(data.profilePic, "\" alt=\"\" class=\"card-img\">\n                    <div class=\"details\">\n                        <div class=\"space-between mb-7\">\n                            <p class=\"detail-heading bold\">").concat(data.title, "</p>\n                            ").concat(data.isFavorite ? "<img src=\"assets/icons/favourite.svg\" alt=\"\" srcset=\"\">" : '', "\n                        </div>\n\n                        <div class=\"sub-info\">\n                            <p style=\"color: #666666; font-size: 12px;\" class=\"mb-7\">").concat(data.subject, " Grade <span style=\"color: #1F7A54;\">").concat(data.grade, "</span></p>\n                            ").concat(data.details ? "<p style=\"color: #666666; font-size: 12px;\" class=\"mb-18\"> <span class=\"dark bold\">".concat(data.details.units, "</span> Units <span class=\"dark bold\">").concat(data.details.lessons, "</span> lessons <span class=\"dark bold\">").concat(data.details.topics, "</span> topics</p>") : '', "\n                        </div>\n\n                        <div class=\"teacher-info\">\n                            <div class=\"space-between\">\n                                <select name=\"class\" class=\"class\">\n                                    ").concat(generateOptions(data.classOption), "\n                                </select>\n                            </div>\n                        </div>\n\n                        <div class=\"course-info\">\n                            ").concat(data.students ? "<span style=\"margin-right: 17px;\">".concat(data.students, " Students</span> <span>").concat(data.stardDate ? data.stardDate : '', " - ").concat(data.endDate ? data.endDate : '', "</span>") : '', "\n                        </div>\n                    </div>\n                    <div class=\"card-icons\">\n                        <button ").concat(data.optionButton.preview ? 'disabled class="card-btn-enable"' : '', "> <img style=\"height: 24px; width: 22px;\" src=\"assets/icons/preview.svg\" alt=\"\" srcset=\"\"></button>\n                        <button ").concat(data.optionButton.manageCourse ? 'disabled class="card-btn-enable"' : '', "> <img style=\"height: 18px; width: 16px;\" src=\"assets/icons/manage course.svg\" alt=\"\" srcset=\"\"></button>\n                        <button ").concat(data.optionButton.gradeSubmissions ? 'disabled class="card-btn-enable"' : '', "> <img style=\"height: 20px; width: 16px;\" src=\"assets/icons/grade submissions.svg\" alt=\"\" srcset=\"\"></button>\n                        <button ").concat(data.optionButton.reports ? 'disabled class="card-btn-enable"' : '', "> <img style=\"height: 24px; width: 22px;\" src=\"assets/icons/reports.svg\" alt=\"\" srcset=\"\"></button>\n                    </div>\n                    ");
            display.appendChild(card);
        }
    });
};
renderCard();
