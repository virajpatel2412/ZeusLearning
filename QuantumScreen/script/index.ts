

function generateOptions(list :string[]) :string {
    let res :string = '';
    for (let item of list) {
        res += `<option value="${item}">${item}</option>`
    }
    return res;
}

let renderCard = () => {
    const display = document.querySelector('.card-display') as HTMLElement;
    const courseCount = document.getElementById('courseCount') as HTMLElement;

    let datalist = fetch('/script/data.json')
        .then((data) => data.json())
        .then((datalist) => {

            courseCount.innerText = datalist.length;

            for (let data of datalist) {
                let card = document.createElement('div');
                card.classList.add('card')

                card.innerHTML += `
        
                    ${data.isAlive ? '' : `<span class="expireTag">EXPIRED</span>`}
                    <img src="${data.profilePic}" alt="" class="card-img">
                    <div class="details">
                        <div class="space-between mb-7">
                            <p class="detail-heading bold">${data.title}</p>
                            ${data.isFavorite ? `<img src="assets/icons/favourite.svg" alt="" srcset="">` : ''}
                        </div>

                        <div class="sub-info">
                            <p style="color: #666666; font-size: 12px;" class="mb-7">${data.subject} Grade <span style="color: #1F7A54;">${data.grade}</span></p>
                            ${data.details ? `<p style="color: #666666; font-size: 12px;" class="mb-18"> <span class="dark bold">${data.details.units}</span> Units <span class="dark bold">${data.details.lessons}</span> lessons <span class="dark bold">${data.details.topics}</span> topics</p>` : ''}
                        </div>

                        <div class="teacher-info">
                            <div class="space-between">
                                <select name="class" class="class">
                                    ${generateOptions(data.classOption)}
                                </select>
                            </div>
                        </div>

                        <div class="course-info">
                            ${data.students ? `<span style="margin-right: 17px;">${data.students} Students</span> <span>${data.stardDate ? data.stardDate : ''} - ${data.endDate ? data.endDate : ''}</span>` : ''}
                        </div>
                    </div>
                    <div class="card-icons">
                        <button ${data.optionButton.preview ? 'disabled class="card-btn-enable"' : ''}> <img src="assets/icons/preview.svg" alt="" srcset=""></button>
                        <button ${data.optionButton.manageCourse ? 'disabled class="card-btn-enable"' : ''}> <img src="assets/icons/manage course.svg" alt="" srcset=""></button>
                        <button ${data.optionButton.gradeSubmissions ? 'disabled class="card-btn-enable"' : ''}> <img src="assets/icons/grade submissions.svg" alt="" srcset=""></button>
                        <button ${data.optionButton.reports ? 'disabled class="card-btn-enable"' : ''}> <img src="assets/icons/reports.svg" alt="" srcset=""></button>
                    </div>
                    `

                display.appendChild(card);
            }
        });
}

renderCard();