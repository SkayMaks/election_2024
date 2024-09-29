const people = [
    {
        name: "Виктория",
        surname: "Нисова",
        position: "секретарь участковой избирательной комиссии №367",
        gender: "Ж",
        codeName: "Хранительница цифр",
        worldName: "учитель математики и черчения",
        responsibilityZone: "протоколы, избирательные бюллетени, реестры, ведомости, ведение документации.",
        superpower: "лично знакома с ИРБ, АРМ ППЗ, от одного ее взгляда, строчки итогового протокола выстраиваются в нужном порядке, а в строках 11 и 12 автоматически выставляется 0",
        favoritePhrase: "Сейчас всё подготовлю"
    },
    {
        name: "Радик",
        surname: "Галимуллин",
        position: "член участковой избирательной комиссии №367",
        gender: "М",
        codeName: "Балагур",
        worldName: "учитель истории и обществознания",
        responsibilityZone: "информирование населения, оказание необходимой помощи маломобильным избирателям. Организация голосования вне помещения.",
        superpower: "любое свое действие осуществлять как свершившийся исторический факт, убеждать электорат хорошо наследить в истории, сделав осознанный выбор, прохождение итогового теста РЦОИТ на 100%.",
        favoritePhrase: "Сижу, никого не трогаю, и тут началось…"
    },
    {
        name: "Галина",
        surname: "Кулькова",
        position: "член участковой избирательной комиссии №367",
        gender: "Ж",
        codeName: "Золотые ручки",
        worldName: "учитель технологии",
        responsibilityZone: "осуществление выдачи избирательных бюллетеней избирателям и работа с книгами списка избирателей (в том числе, по окончании голосования – внесение суммарных данных по каждой странице).",
        superpower: "может за считанные секунды не только выдать бюллетень, внести соответствующие отметки в список избирателей, но и создать уютную атмосферу в зале для голосования. Один взмах руки – и занавески на кабинках становятся отглаженными и висят на своём месте, а оформление зала становится таким праздничным, что каждому голосующему хочется оставить красивую фотографию об этом памятном дне.",
        favoritePhrase: "Так будет красиво!"
    },
    {
        name: "Маргарита",
        surname: "Свизева",
        position: "член участковой избирательной комиссии №367",
        gender: "Ж",
        codeName: "Вирус улыбки",
        worldName: "учитель начальных классов",
        responsibilityZone: "осуществление выдачи избирательных бюллетеней избирателям и работа с книгами списка избирателей.",
        superpower: "создание доброжелательной атмосферы в зале. Спец по оформлению бюллетеней. Скорость проставления печати 4 шт./ сек.",
        favoritePhrase: "Пришёл сам, приведи другого"
    },
    {
        name: "Анастасия",
        surname: "Коржикова",
        position: "член участковой избирательной комиссии №367",
        gender: "Ж",
        codeName: "Сложное – просто",
        worldName: "учитель начальных классов",
        responsibilityZone: "осуществление выдачи избирательных бюллетеней избирателям и работа с книгами списка избирателей.",
        superpower: "объяснять всё доступно – с ней даже заполнение бюллетеня   превращается в увлекательный квест или разгадывание кроссворда, только вместо слов нужно поставить галочку в месте пересечения интересов с будущим кандидатом",
        favoritePhrase: "Не стесняйтесь спрашивать, мы все здесь для вас!"
    },
    {
        name: "Галина",
        surname: "Дереза",
        position: "член участковой избирательной комиссии №367",
        gender: "Ж",
        codeName: "Спец",
        worldName: "учитель начальных классов",
        responsibilityZone: "осуществление выдачи избирательных бюллетеней избирателям и работа с книгами списка избирателей.",
        superpower: "помнить всех избирателей в лицо, их адрес, интересы, выдавая бюллетень, не только объяснит правила его заполнения, но и даст консультацию по проблемным школьным темам. Мгновенно считает «подвалы» в книге",
        favoritePhrase: "Сейчас всё объясню!"
    },
    {
        name: "Вера",
        surname: "Каразбаева",
        position: "член участковой избирательной комиссии №367",
        gender: "Ж",
        codeName: "Контроль и порядок",
        worldName: "учитель начальных классов",
        responsibilityZone: "информирование населения, наблюдение за порядком в помещении для голосования, контроль за сохранностью ящиков для голосования, информационных стендов.",
        superpower: "во время обхода одним взглядом внушать избирателям, что они очень ходят выполнить свой гражданский долг, внести свой вклад в будущее Кузбасса. Телепатически видеть наличие – отсутствие ручек в кабинках",
        favoritePhrase: "Всё должно быть на своих местах!"
    },
    {
        name: "Николай",
        surname: "Горбатюк",
        position: "член участковой избирательной комиссии №367",
        gender: "М",
        codeName: "Рыбка",
        worldName: "учитель физкультуры, тренер по плаванию",
        responsibilityZone: "организация голосования вне помещения для голосования. Сборка и разборка оборудования на участке.",
        superpower: "на участке как рыба в воде: в считанные секунды устанавливать всё необходимое оборудование на участке так, чтобы в избирательные кабинки можно было не только зайти, но и выйти. Моментально разбирать его и упаковывать в оригинальную упаковку, не потеряв ни одной гаечки и винтика",
        favoritePhrase: "Сейчас всё будет"
    },
    {
        name: "Наталья",
        surname: "Яхонтова",
        position: "заместитель председателя участковой избирательной комиссии №367",
        gender: "Ж",
        codeName: "Невидимка",
        worldName: "заместитель директора по УВР",
        responsibilityZone: "увеличенная форма протокола об итогах голосования Помощь избирателям при их ознакомлении с секретными материалами, размещенными на информационном стенде.",
        superpower: "быть абсолютно незаметной на участке, материализоваться при исчезновении председателя и секретаря УИК, а также при появлении сверхсекретных избирателей, включенных в доп. книгу",
        favoritePhrase: "А быстрее можно?"
    },
    {
        name: "Алексей",
        surname: "Шетько",
        position: "член участковой избирательной комиссии №367",
        gender: "М",
        codeName: "План В",
        worldName: "учитель истории и обществознания",
        responsibilityZone: "информирование населения, оказание необходимой помощи маломобильным избирателям. Организация голосования вне помещения.",
        superpower: "привести 1001 факт о необходимости иметь активную гражданскую позицию. Быстро и непринуждённо завязать беседу даже с самым возрастным избирателем, со слов «А помните… в таком-то году, вот чтобы этого не повторилось, сделайте свой осознанный выбор, соблюдая тайну голосования»",
        favoritePhrase: "Не вляпаться бы в историю"
    },
    {
        name: "Юлия",
        surname: "Сотникова",
        position: "член участковой избирательной комиссии №367",
        gender: "Ж",
        codeName: "Бархатные ручки",
        worldName: "учитель начальных классов",
        responsibilityZone: "информирование населения, организация голосования вне помещения.",
        superpower: "пересчет бюллетеней проводит быстрее, чем специализированное оборудование. Знает все, и даже больше, о том, как провести голосование вне помещения, как сделать необходимые отметки в списке избирателей по возвращении со спецзадания",
        favoritePhrase: "Вот и чудненько"
    },
    {
        name: "Анна",
        surname: "Антипина",
        position: "член участковой избирательной комиссии №367",
        gender: "Ж",
        codeName: "Только что тут была",
        worldName: "заместитель директора по УВР",
        responsibilityZone: "участвует в опечатывании ящиков для голосования, в подсчете голосов избирателей, в работе по погашению неиспользованных избирательных бюллетеней.",
        superpower: "владеет сверхсекретной информацией о том, что означает нижний левый угол у избирательного бюллетеня. Наделена сверхскоростью сортировки избирательных бюллетеней и оглашения содержащихся в каждом из них отметок избирателей, при этом демонстрируя это всем лицам, присутствующим при подсчёте голосов",
        favoritePhrase: "Так должно работать"
    },
    {
        name: "Елена",
        surname: "Белозерова",
        position: "член участковой избирательной комиссии №367",
        gender: "Ж",
        codeName: "Хозяюшка",
        worldName: "учитель начальных классов",
        responsibilityZone: "организация голосования вне помещения, подсчёт голосов избирателей.",
        superpower: "успевает не только выполнить свою миссию, но и вкусно накормить всю комиссиюифры",
        favoritePhrase: "Чай будешь?"
    },
    {
        name: "Татьяна и Светлана",
        surname: "Никанорова и Иванова",
        position: "члены участковой избирательной комиссии №367",
        gender: "Ж",
        codeName: "Работаем вместе",
        worldName: "учителя начальных классов",
        responsibilityZone: "порядок на участке, работа с избирателями, участвуют в работе по упаковке избирательной документации в мешки.",
        superpower: "сверхбдительность, умение видеть настроение каждого избирателя",
        favoritePhrase: "Вам помочь? Или не мешать?"
    },
    {
        name: "Анна ",
        surname: "Шетько",
        position: "председатель участковой избирательной комиссии №367",
        gender: "Ж",
        codeName: "О",
        worldName: "учитель начальных классов",
        responsibilityZone: "организовать, осуществлять, получать, принимать, нести ответственность, отвечать за работу...",
        superpower: "многозадачность, умение находиться в нескольких измерениях, растягивать количество часов в сутках; знание наизусть №67-ФЗ, №55 - ОЗ, умение организовать выполнение миссии на высоком уровне, без единой потери. 100% членов спецподразделения доживают, выполнив свою сверхзадачу, до итогового заседания УИК и подписания протокола УИК об итогах голосования. Поговаривают, что если бы «О» была на «Титанике», то все бы остались не только живы, но были бы сыты, довольны и, напевая песенку, добрались бы до берега",
        favoritePhrase: "Всё будет хорошо!"
    }
];

function showInfo(index) {
    const person = people[index];
    const infoDiv = document.getElementById('info');
    infoDiv.innerHTML = `
        <h2>${person.name} ${person.surname}</h2>
        <p><strong>Должность:</strong> ${person.position}</p>
        <p><strong>Пол:</strong> ${person.gender}</p>
        <p><strong>Кодовое имя:</strong> ${person.codeName}</p>
        <p><strong>В миру:</strong> ${person.worldName}</p>
        <p class="typewriter"><strong>Зона ответственности:</strong> ${person.responsibilityZone}</p>
        <p><strong>Сверхспособность:</strong> ${person.superpower}</p>
        <p><strong>Любимая фраза:</strong> "${person.favoritePhrase}"</p>
       
    `;
}
function selectAvatar(element) {
    // Убираем выделение у всех аватаров
    const avatars = document.querySelectorAll('.avatar');
    avatars.forEach(avatar => {
        avatar.classList.remove('selected');
    });

    // Добавляем выделение к выбранному аватару
    element.classList.add('selected');

    // Здесь можно добавить код для обновления информации в блоке "info"
}
