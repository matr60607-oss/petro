/* =========================================
   1. ДАННЫЕ УЧЕБНЫХ ЗАВЕДЕНИЙ
========================================= */

// Категории:
// it, medicine, engineering, construction,
// business, service.

const colleges = [
    {
        id: 1,

        name: "Петропавловский колледж машиностроения и транспорта имени Байкена Ашимова",

        shortName: "Колледж машиностроения и транспорта",

        category: ["engineering", "it"],

        type: "Технический колледж",

        address: "Петропавловск, ул. Юрия Медведева, 1А",

        image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=80",

        description:
            "Учебное заведение технического профиля. При выборе специальности стоит изучить программы подготовки, производственную практику и возможности дальнейшего трудоустройства.",

        specialties: [
            "Технические специальности",
            "Транспорт",
            "Электротехника",
            "IT-направления"
        ],

        admission: "Условия уточняются",

        tuition: "Уточнить в колледже",

        grants: "Условия необходимо проверить",

        duration: "Зависит от специальности",

        pros: [
            "Техническая направленность обучения",
            "Возможность изучить несколько профессий технического профиля",
            "Можно заранее изучить требования работодателей"
        ],

        cons: [
            "Для отдельных специальностей могут потребоваться дополнительные практические навыки",
            "Актуальные условия поступления необходимо уточнять",
            "Необходимо заранее узнать об оснащении мастерских"
        ],

        teacherInfo:
            "Сведения о преподавателях необходимо проверить по официальным источникам. Реальные имена и отзывы без подтверждения не публикуются.",

        reviews: [
            {
                author: "Пример отзыва",
                role: "Демонстрационный материал",
                rating: 4,
                text: "Здесь будет опубликован отзыв студента о практических занятиях, преподавателях и организации учебного процесса.",
                demo: true
            }
        ],

        officialUrl: "https://pkmt.edu.kz/",

        verified: false
    },


    {
        id: 2,

        name: "Высший Северо-Казахстанский профессионально-педагогический колледж",

        shortName: "Профессионально-педагогический колледж",

        category: ["engineering", "service"],

        type: "Профессиональный колледж",

        address: "Петропавловск, ул. Студенческая, 1",

        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",

        description:
            "Колледж с профессионально-педагогическими и другими направлениями подготовки. Перед поступлением важно изучить учебные планы и требования к конкретной специальности.",

        specialties: [
            "Педагогические направления",
            "Физическая культура",
            "Технические направления"
        ],

        admission: "Условия уточняются",

        tuition: "Уточнить в колледже",

        grants: "Условия необходимо проверить",

        duration: "Зависит от специальности",

        pros: [
            "Разные направления профессиональной подготовки",
            "Можно сравнить несколько карьерных траекторий",
            "Есть смысл изучить варианты дальнейшего образования"
        ],

        cons: [
            "Содержание обучения сильно зависит от выбранной специальности",
            "Условия приёма нужно уточнять отдельно",
            "Перед поступлением стоит узнать о базах практики"
        ],

        teacherInfo:
            "Информация о преподавателях будет добавлена после проверки официальных данных.",

        reviews: [
            {
                author: "Пример отзыва",
                role: "Демонстрационный материал",
                rating: 5,
                text: "В этом разделе будут реальные впечатления студентов об учебной нагрузке, практике и отношениях с преподавателями.",
                demo: true
            }
        ],

        officialUrl: "https://vskppk.edu.kz/",

        verified: false
    },


    {
        id: 3,

        name: "Северо-Казахстанский высший медицинский колледж имени Жұмағали Тлеулина",

        shortName: "Высший медицинский колледж",

        category: ["medicine"],

        type: "Медицинский колледж",

        address: "Петропавловск, ул. Шухова, 42",

        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",

        description:
            "Медицинское образование предполагает изучение профильных дисциплин и практическую подготовку. Необходимо учитывать требования к поступлению и особенности будущей профессии.",

        specialties: [
            "Сестринское дело",
            "Фармация",
            "Лабораторная диагностика",
            "Другие медицинские направления"
        ],

        admission: "Зависит от программы",

        tuition: "Уточнить в колледже",

        grants: "Условия необходимо проверить",

        duration: "Зависит от специальности",

        pros: [
            "Подготовка к профессиям в сфере здравоохранения",
            "Важную роль играет практическое обучение",
            "Можно заранее изучить требования к работе в медицине"
        ],

        cons: [
            "Обучение может быть интенсивным",
            "Работа в медицине требует высокой ответственности",
            "Необходимо учитывать требования к практике и допуску к работе"
        ],

        teacherInfo:
            "Реальный состав преподавателей и сведения об их квалификации нужно проверить по официальным источникам.",

        reviews: [
            {
                author: "Пример отзыва",
                role: "Демонстрационный материал",
                rating: 4,
                text: "Здесь будет реальный отзыв о практических занятиях, учебной нагрузке и подготовке к будущей профессии.",
                demo: true
            }
        ],

        officialUrl: "https://www.mksko.edu.kz/",

        verified: false
    },


    {
        id: 4,

        name: "Высший строительно-экономический колледж",

        shortName: "Строительно-экономический колледж",

        category: ["construction", "business"],

        type: "Строительно-экономический колледж",

        address: "Петропавловск, ул. Н. Назарбаева, 262",

        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",

        description:
            "Образование в области строительства и экономики. При выборе программы полезно сравнить содержание дисциплин, объём практики и востребованные навыки.",

        specialties: [
            "Строительство",
            "Экономика",
            "Бухгалтерский учёт"
        ],

        admission: "Условия уточняются",

        tuition: "Уточнить в колледже",

        grants: "Условия необходимо проверить",

        duration: "Зависит от специальности",

        pros: [
            "Можно рассмотреть строительные и экономические профессии",
            "Полезно изучить разные варианты карьерного развития",
            "Можно заранее сравнить программы подготовки"
        ],

        cons: [
            "Карьерные перспективы зависят от выбранной специальности",
            "Стоимость обучения нужно уточнять",
            "Необходимо проверить актуальность перечня программ"
        ],

        teacherInfo:
            "Информация о преподавателях и квалификации будет добавлена после проверки.",

        reviews: [
            {
                author: "Пример отзыва",
                role: "Демонстрационный материал",
                rating: 4,
                text: "Здесь появится отзыв о качестве занятий, практических заданиях и подготовке к работе по специальности.",
                demo: true
            }
        ],

        officialUrl: "https://vsek.mycollege.kz/",

        verified: false
    },


    {
        id: 5,

        name: "Колледж сферы обслуживания имени Искандера Даутова",

        shortName: "Колледж сферы обслуживания",

        category: ["service", "business"],

        type: "Колледж сферы обслуживания",

        address: "Петропавловск, ул. Интернациональная, 42",

        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",

        description:
            "Подготовка специалистов для сферы обслуживания. При выборе программы стоит обратить внимание на практические занятия и возможности применять навыки в работе.",

        specialties: [
            "Поварское дело",
            "Кондитерское дело",
            "Сфера обслуживания"
        ],

        admission: "Условия уточняются",

        tuition: "Уточнить в колледже",

        grants: "Условия необходимо проверить",

        duration: "Зависит от специальности",

        pros: [
            "Профессии с практической составляющей",
            "Можно заранее изучить особенности работы в выбранной сфере",
            "Полезно узнать о возможностях практики"
        ],

        cons: [
            "Некоторые профессии предполагают физическую нагрузку",
            "Рабочий график зависит от будущего места работы",
            "Условия практики необходимо уточнять"
        ],

        teacherInfo:
            "Сведения о преподавателях будут опубликованы после проверки официальных данных.",

        reviews: [
            {
                author: "Пример отзыва",
                role: "Демонстрационный материал",
                rating: 5,
                text: "Здесь будет мнение выпускника о практических занятиях, преподавателях и возможностях после окончания колледжа.",
                demo: true
            }
        ],

        officialUrl: "https://ksodautova.mycollege.kz/",

        verified: false
    }
];


/* =========================================
   2. СОСТОЯНИЕ САЙТА
========================================= */

// Активная категория фильтра.
let activeCategory = "all";

// Текущий поисковый запрос.
let searchQuery = "";

// Показываем только избранные учебные заведения,
// если пользователь включил соответствующий режим.
let favoritesOnly = false;

// ID учебных заведений, выбранных для сравнения.
let compareIds = [];

// Запоминаем открытый колледж.
let activeCollegeId = null;

// Таймер уведомления.
let toastTimer = null;


/* =========================================
   3. СОХРАНЕНИЕ ИЗБРАННОГО
========================================= */

function readFavorites() {
    try {
        const saved = JSON.parse(
            localStorage.getItem("edupetro-favorites") || "[]"
        );

        if (!Array.isArray(saved)) {
            return new Set();
        }

        return new Set(
            saved.filter(Number.isInteger)
        );

    } catch (error) {
        return new Set();
    }
}

const favoriteIds = readFavorites();


function saveFavorites() {
    try {
        localStorage.setItem(
            "edupetro-favorites",
            JSON.stringify([...favoriteIds])
        );
    } catch (error) {
        showToast("Не удалось сохранить избранное в браузере.");
    }
}


function updateFavoritesCounter() {
    document.getElementById("favorites-count").textContent =
        favoriteIds.size;
}


/* =========================================
   4. ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
========================================= */

// Защита текста перед вставкой в HTML.
// Это особенно важно, когда данные будут
// поступать из пользовательских форм.

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[character];
    });
}


// Получение колледжа по ID.

function getCollegeById(id) {
    return colleges.find(college => college.id === Number(id));
}


// Преобразование названия категории.

function getCategoryName(category) {
    const categories = {
        it: "IT",
        medicine: "Медицина",
        engineering: "Техника",
        construction: "Строительство",
        business: "Экономика",
        service: "Сфера услуг"
    };

    return categories[category] || "Образование";
}


// Получение названия основной категории колледжа.

function getPrimaryCategory(college) {
    return getCategoryName(college.category[0]);
}


// Получение количества демонстрационных отзывов.

function getReviewCount(college) {
    return college.reviews.length;
}


// Формирование звёзд рейтинга.
// Оценка здесь является демонстрационной,
// а не реальным рейтингом учебного заведения.

function renderStars(rating) {
    const fullStars = Math.max(
        0,
        Math.min(5, Math.round(rating))
    );

    return "★".repeat(fullStars) + "☆".repeat(5 - fullStars);
}


/* =========================================
   5. ПОИСК И ФИЛЬТРАЦИЯ
========================================= */

function getFilteredColleges() {
    let result = [...colleges];

    // Фильтр по категории.

    if (activeCategory !== "all") {
        result = result.filter(college =>
            college.category.includes(activeCategory)
        );
    }

    // Поиск по названию, адресу,
    // описанию и специальностям.

    if (searchQuery.trim()) {
        const query = searchQuery
            .trim()
            .toLocaleLowerCase("ru");

        result = result.filter(college => {
            const searchableText = [
                college.name,
                college.shortName,
                college.address,
                college.description,
                ...college.specialties,
                ...college.category.map(getCategoryName)
            ]
                .join(" ")
                .toLocaleLowerCase("ru");

            return searchableText.includes(query);
        });
    }

    // Режим избранного.

    if (favoritesOnly) {
        result = result.filter(college =>
            favoriteIds.has(college.id)
        );
    }

    // Сортировка.

    const sortMode = document.getElementById("sort-select").value;

    if (sortMode === "name") {
        result.sort((a, b) =>
            a.shortName.localeCompare(b.shortName, "ru")
        );
    }

    return result;
}


/* =========================================
   6. СОЗДАНИЕ КАРТОЧКИ КОЛЛЕДЖА
========================================= */

function createCollegeCard(college) {
    const isFavorite = favoriteIds.has(college.id);

    const isCompared = compareIds.includes(college.id);

    const specialtyTags = college.specialties
        .slice(0, 3)
        .map(specialty => `
            <span class="specialty-tag">
                ${escapeHTML(specialty)}
            </span>
        `)
        .join("");

    const safeImage = escapeHTML(college.image);

    return `
        <article class="college-card">

            <div class="college-image-wrapper">

                <img
                    class="college-image"
                    src="${safeImage}"
                    alt="${escapeHTML(college.shortName)}"
                    loading="lazy"
                    data-college-image="${college.id}"
                >

                <span class="college-type">
                    ${escapeHTML(college.type)}
                </span>

                <button
                    class="favorite-button ${isFavorite ? "is-favorite" : ""}"
                    type="button"
                    data-favorite="${college.id}"
                    aria-label="${isFavorite ? "Удалить из избранного" : "Добавить в избранное"}"
                    aria-pressed="${isFavorite}"
                >
                    <i class="${isFavorite ? "fa-solid" : "fa-regular"} fa-heart"></i>
                </button>

            </div>

            <div class="college-card-body">

                <div class="college-meta">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>${escapeHTML(college.address)}</span>
                </div>

                <h3>
                    ${escapeHTML(college.shortName)}
                </h3>

                <p class="college-description">
                    ${escapeHTML(college.description)}
                </p>

                <div class="specialty-list">
                    ${specialtyTags}
                </div>

                <div class="college-card-footer">

                    <div class="review-summary">
                        <i class="fa-solid fa-comment-dots"></i>

                        <strong>${getReviewCount(college)}</strong>

                        <span>
                            ${getReviewCount(college) === 1
                                ? "пример"
                                : "примеров"}
                        </span>
                    </div>

                    <button
                        class="details-button"
                        type="button"
                        data-details="${college.id}"
                    >
                        Подробнее
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>

                </div>

                <label class="compare-checkbox">

                    <input
                        type="checkbox"
                        data-compare="${college.id}"
                        ${isCompared ? "checked" : ""}
                    >

                    Добавить к сравнению

                </label>

            </div>

        </article>
    `;
}


/* =========================================
   7. ОТОБРАЖЕНИЕ КАТАЛОГА
========================================= */

function renderColleges() {
    const grid = document.getElementById("college-grid");

    const emptyState = document.getElementById("empty-state");

    const resultsCount = document.getElementById("results-count");

    const filteredColleges = getFilteredColleges();

    grid.innerHTML = filteredColleges
        .map(createCollegeCard)
        .join("");

    resultsCount.textContent = filteredColleges.length;

    emptyState.classList.toggle(
        "hidden",
        filteredColleges.length !== 0
    );

    grid.classList.toggle(
        "hidden",
        filteredColleges.length === 0
    );

    // Если браузер не смог загрузить фотографию,
    // заменяем её нейтральной иллюстрацией.

    grid.querySelectorAll("[data-college-image]").forEach(image => {
        image.addEventListener("error", () => {
            const placeholder = document.createElement("div");

            placeholder.className = "college-image-placeholder";

            placeholder.innerHTML =
                '<i class="fa-solid fa-building-columns"></i>';

            image.replaceWith(placeholder);
        }, { once: true });
    });

    updateFavoritesCounter();

    renderCompareBar();
}


/* =========================================
   8. ИЗБРАННОЕ
========================================= */

function toggleFavorite(id) {
    const college = getCollegeById(id);

    if (!college) {
        return;
    }

    if (favoriteIds.has(college.id)) {
        favoriteIds.delete(college.id);

        showToast("Удалено из избранного.");

    } else {
        favoriteIds.add(college.id);

        showToast("Добавлено в избранное.");
    }

    saveFavorites();

    renderColleges();

    // Если пользователь открыл подробную карточку,
    // обновляем её кнопки.

    if (activeCollegeId === college.id) {
        openCollegeDetails(college.id);
    }
}


function showFavorites() {
    favoritesOnly = !favoritesOnly;

    const favoritesButton = document.getElementById("show-favorites");

    favoritesButton.classList.toggle("favorites-mode", favoritesOnly);

    if (favoritesOnly) {
        showToast("Показаны избранные учебные заведения.");

        document.getElementById("catalog").scrollIntoView({
            behavior: "smooth"
        });

    } else {
        showToast("Показан весь каталог.");
    }

    renderColleges();
}


/* =========================================
   9. ПОДРОБНАЯ ИНФОРМАЦИЯ
========================================= */

function openCollegeDetails(id) {
    const college = getCollegeById(id);

    if (!college) {
        return;
    }

    activeCollegeId = college.id;

    const modal = document.getElementById("college-modal");

    const content = document.getElementById("modal-content");

    const isFavorite = favoriteIds.has(college.id);

    const isCompared = compareIds.includes(college.id);

    const specialties = college.specialties
        .map(specialty => `
            <span class="specialty-tag">
                ${escapeHTML(specialty)}
            </span>
        `)
        .join("");

    const pros = college.pros
        .map(item => `<li>${escapeHTML(item)}</li>`)
        .join("");

    const cons = college.cons
        .map(item => `<li>${escapeHTML(item)}</li>`)
        .join("");

    const reviews = college.reviews
        .map(review => `
            <article class="review-card">

                <div class="review-header">

                    <div>
                        <div class="review-author">
                            ${escapeHTML(review.author)}
                        </div>

                        <span class="review-role">
                            ${escapeHTML(review.role)}
                        </span>
                    </div>

                    <div class="review-stars" aria-label="Демонстрационная оценка">
                        ${renderStars(review.rating)}
                    </div>

                </div>

                <p>${escapeHTML(review.text)}</p>

                ${review.demo ? `
                    <span class="demo-review-label">
                        ДЕМО · НЕ РЕАЛЬНЫЙ ОТЗЫВ
                    </span>
                ` : ""}

            </article>
        `)
        .join("");

    content.innerHTML = `
        <div class="modal-cover">

            <img
                src="${escapeHTML(college.image)}"
                alt="${escapeHTML(college.shortName)}"
                id="modal-image"
            >

        </div>

        <div class="modal-body">

            <span class="modal-kicker">
                ${escapeHTML(college.type)}
            </span>

            <h2 id="modal-title">
                ${escapeHTML(college.name)}
            </h2>

            <p class="modal-description">
                ${escapeHTML(college.description)}
            </p>

            <div class="modal-facts">

                <div class="modal-fact">
                    <span>Адрес</span>
                    <strong>${escapeHTML(college.address)}</strong>
                </div>

                <div class="modal-fact">
                    <span>Стоимость</span>
                    <strong>${escapeHTML(college.tuition)}</strong>
                </div>

                <div class="modal-fact">
                    <span>Срок обучения</span>
                    <strong>${escapeHTML(college.duration)}</strong>
                </div>

                <div class="modal-fact">
                    <span>Поступление</span>
                    <strong>${escapeHTML(college.admission)}</strong>
                </div>

                <div class="modal-fact">
                    <span>Гранты</span>
                    <strong>${escapeHTML(college.grants)}</strong>
                </div>

                <div class="modal-fact">
                    <span>Статус данных</span>
                    <strong>Требуется проверка</strong>
                </div>

            </div>


            <section class="modal-section">

                <h3>Специальности и направления</h3>

                <div class="modal-specialties">
                    ${specialties}
                </div>

                <p class="modal-description">
                    Это предварительный список направлений.
                    Перед поступлением обязательно проверь актуальные
                    специальности на официальном сайте колледжа.
                </p>

            </section>


            <section class="modal-section">

                <h3>Плюсы и минусы</h3>

                <p class="modal-description">
                    Ниже представлены вопросы и возможные особенности,
                    которые стоит изучить перед поступлением. Это не
                    подтверждённые оценки конкретного учебного заведения.
                </p>

                <div class="pros-cons">

                    <div class="pros-box">

                        <h4>
                            <i class="fa-solid fa-circle-check"></i>
                            Что стоит рассмотреть
                        </h4>

                        <ul>${pros}</ul>

                    </div>

                    <div class="cons-box">

                        <h4>
                            <i class="fa-solid fa-circle-exclamation"></i>
                            На что обратить внимание
                        </h4>

                        <ul>${cons}</ul>

                    </div>

                </div>

            </section>


            <section class="modal-section">

                <h3>Преподаватели</h3>

                <div class="teacher-card">

                    <div class="teacher-avatar">
                        <i class="fa-solid fa-user-graduate"></i>
                    </div>

                    <div>
                        <strong>Информация уточняется</strong>

                        <p>
                            ${escapeHTML(college.teacherInfo)}
                        </p>
                    </div>

                </div>

            </section>


            <section class="modal-section">

                <h3>Отзывы студентов</h3>

                <p class="modal-description">
                    Демонстрационные отзывы не отражают реальный опыт
                    студентов. В дальнейшем этот раздел будет заполняться
                    пользовательскими отзывами с модерацией.
                </p>

                ${reviews}

            </section>


            <div class="modal-footer">

                <button
                    class="button button-primary"
                    type="button"
                    data-modal-favorite="${college.id}"
                >
                    <i class="${isFavorite ? "fa-solid" : "fa-regular"} fa-heart"></i>

                    ${isFavorite
                        ? "В избранном"
                        : "В избранное"}
                </button>

                <button
                    class="button button-outline"
                    type="button"
                    data-modal-compare="${college.id}"
                >
                    <i class="fa-solid fa-scale-balanced"></i>

                    ${isCompared
                        ? "Убрать из сравнения"
                        : "Сравнить"}
                </button>

                <a
                    class="button button-outline"
                    href="${escapeHTML(college.officialUrl)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Официальный сайт
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>

            </div>

        </div>
    `;

    // Резервная картинка для окна подробностей.

    const modalImage = document.getElementById("modal-image");

    modalImage.addEventListener("error", () => {
        const placeholder = document.createElement("div");

        placeholder.className = "modal-cover-placeholder";

        placeholder.innerHTML =
            '<i class="fa-solid fa-building-columns"></i>';

        modalImage.replaceWith(placeholder);
    }, { once: true });

    modal.classList.remove("hidden");

    document.body.classList.add("modal-open");

    document.getElementById("modal-close").focus();
}


function closeCollegeDetails() {
    const modal = document.getElementById("college-modal");

    modal.classList.add("hidden");

    document.body.classList.remove("modal-open");

    activeCollegeId = null;
}


/* =========================================
   10. СРАВНЕНИЕ
========================================= */

function toggleCompare(id) {
    const college = getCollegeById(id);

    if (!college) {
        return;
    }

    if (compareIds.includes(college.id)) {
        compareIds = compareIds.filter(
            compareId => compareId !== college.id
        );

        showToast("Учебное заведение удалено из сравнения.");

    } else {
        if (compareIds.length >= 3) {
            showToast("Можно сравнить не более трёх заведений.");

            renderColleges();

            return;
        }

        compareIds.push(college.id);

        showToast("Добавлено к сравнению.");
    }

    renderColleges();
}


function renderCompareBar() {
    const bar = document.getElementById("compare-bar");

    const count = document.getElementById("compare-count");

    count.textContent = compareIds.length;

    bar.classList.toggle(
        "hidden",
        compareIds.length === 0
    );
}


function clearCompare() {
    compareIds = [];

    renderColleges();

    showToast("Сравнение очищено.");
}


function openComparison() {
    const selectedColleges = compareIds
        .map(getCollegeById)
        .filter(Boolean);

    if (selectedColleges.length < 2) {
        showToast("Выбери минимум два учебных заведения.");

        return;
    }

    const content = document.getElementById("modal-content");

    const modal = document.getElementById("college-modal");

    const rows = [
        {
            label: "Название",
            getValue: college => college.name
        },
        {
            label: "Направления",
            getValue: college => college.specialties.join(", ")
        },
        {
            label: "Адрес",
            getValue: college => college.address
        },
        {
            label: "Стоимость",
            getValue: college => college.tuition
        },
        {
            label: "Гранты",
            getValue: college => college.grants
        },
        {
            label: "Срок обучения",
            getValue: college => college.duration
        },
        {
            label: "Условия поступления",
            getValue: college => college.admission
        }
    ];

    const tableRows = rows.map(row => `
        <tr>
            <td>${escapeHTML(row.label)}</td>

            ${selectedColleges.map(college => `
                <td>${escapeHTML(row.getValue(college))}</td>
            `).join("")}
        </tr>
    `).join("");

    content.innerHTML = `
        <div class="modal-body">

            <span class="modal-kicker">
                СРАВНЕНИЕ
            </span>

            <h2 id="modal-title">
                Сравни учебные заведения
            </h2>

            <p class="modal-description">
                Сравнение помогает увидеть основные различия.
                Неизвестные данные необходимо уточнять у колледжей.
            </p>

            <div class="comparison-table-wrapper">

                <table class="comparison-table">

                    <thead>
                        <tr>
                            <th>Критерий</th>

                            ${selectedColleges.map(college => `
                                <th>${escapeHTML(college.shortName)}</th>
                            `).join("")}
                        </tr>
                    </thead>

                    <tbody>
                        ${tableRows}
                    </tbody>

                </table>

            </div>

            <div class="modal-footer">

                <button
                    class="button button-outline"
                    id="comparison-close"
                    type="button"
                >
                    Закрыть
                </button>

            </div>

        </div>
    `;

    modal.classList.remove("hidden");

    document.body.classList.add("modal-open");
}


/* =========================================
   11. УВЕДОМЛЕНИЯ
========================================= */

function showToast(message) {
    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("visible");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("visible");
    }, 2600);
}


/* =========================================
   12. СБРОС ФИЛЬТРОВ
========================================= */

function resetFilters() {
    activeCategory = "all";

    searchQuery = "";

    favoritesOnly = false;

    document.getElementById("search-input").value = "";

    document.getElementById("sort-select").value = "default";

    document.querySelectorAll("[data-filter]").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.filter === "all"
        );
    });

    document.getElementById("show-favorites")
        .classList.remove("favorites-mode");

    renderColleges();
}


/* =========================================
   13. ОБРАБОТЧИКИ СОБЫТИЙ
========================================= */

// Обрабатываем действия внутри каталога
// через один обработчик.

document.getElementById("college-grid").addEventListener(
    "click",
    event => {
        const favoriteButton = event.target.closest("[data-favorite]");

        if (favoriteButton) {
            toggleFavorite(Number(favoriteButton.dataset.favorite));

            return;
        }

        const detailsButton = event.target.closest("[data-details]");

        if (detailsButton) {
            openCollegeDetails(Number(detailsButton.dataset.details));
        }
    }
);


// Выбор колледжей для сравнения.

document.getElementById("college-grid").addEventListener(
    "change",
    event => {
        const checkbox = event.target.closest("[data-compare]");

        if (!checkbox) {
            return;
        }

        toggleCompare(Number(checkbox.dataset.compare));
    }
);


// Поиск по кнопке.

document.getElementById("search-form").addEventListener(
    "submit",
    event => {
        event.preventDefault();

        searchQuery = document.getElementById("search-input").value;

        favoritesOnly = false;

        renderColleges();

        document.getElementById("catalog").scrollIntoView({
            behavior: "smooth"
        });
    }
);


// Живой поиск во время ввода.

document.getElementById("search-input").addEventListener(
    "input",
    event => {
        searchQuery = event.target.value;

        favoritesOnly = false;

        renderColleges();
    }
);


// Быстрые поисковые запросы.

document.querySelectorAll("[data-search]").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.search;

        const input = document.getElementById("search-input");

        input.value = value;

        searchQuery = value;

        favoritesOnly = false;

        renderColleges();

        document.getElementById("catalog").scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Фильтры каталога.

document.querySelectorAll("[data-filter]").forEach(button => {
    button.addEventListener("click", () => {
        activeCategory = button.dataset.filter;

        favoritesOnly = false;

        document.getElementById("show-favorites")
            .classList.remove("favorites-mode");

        document.querySelectorAll("[data-filter]").forEach(item => {
            item.classList.toggle(
                "active",
                item === button
            );
        });

        renderColleges();
    });
});


// Направления на главной странице.

document.querySelectorAll("[data-category]").forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;

        activeCategory = category;

        favoritesOnly = false;

        document.querySelectorAll("[data-filter]").forEach(item => {
            item.classList.toggle(
                "active",
                item.dataset.filter === category
            );
        });

        renderColleges();

        document.getElementById("catalog").scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Сортировка.

document.getElementById("sort-select").addEventListener(
    "change",
    renderColleges
);


// Избранное.

document.getElementById("show-favorites").addEventListener(
    "click",
    showFavorites
);


// Закрытие модального окна.

document.getElementById("modal-close").addEventListener(
    "click",
    closeCollegeDetails
);


// Закрытие по клику на затемнённую область.

document.getElementById("college-modal").addEventListener(
    "click",
    event => {
        if (event.target.id === "college-modal") {
            closeCollegeDetails();
        }
    }
);


// Закрытие по Escape.

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeCollegeDetails();

        document.getElementById("navigation")
            .classList.remove("open");

        document.getElementById("mobile-menu-button")
            .setAttribute("aria-expanded", "false");
    }
});


// Действия внутри модального окна.

document.getElementById("modal-content").addEventListener(
    "click",
    event => {
        const favoriteButton = event.target.closest(
            "[data-modal-favorite]"
        );

        if (favoriteButton) {
            toggleFavorite(Number(favoriteButton.dataset.modalFavorite));

            return;
        }

        const compareButton = event.target.closest(
            "[data-modal-compare]"
        );

        if (compareButton) {
            const id = Number(compareButton.dataset.modalCompare);

            toggleCompare(id);

            if (activeCollegeId !== null) {
                openCollegeDetails(activeCollegeId);
            }

            return;
        }

        if (event.target.closest("#comparison-close")) {
            closeCollegeDetails();
        }
    }
);


// Сравнение.

document.getElementById("compare-button").addEventListener(
    "click",
    openComparison
);


document.getElementById("clear-compare").addEventListener(
    "click",
    clearCompare
);


// Сброс поиска и фильтров.

document.getElementById("reset-filters").addEventListener(
    "click",
    resetFilters
);


// Мобильное меню.

document.getElementById("mobile-menu-button").addEventListener(
    "click",
    event => {
        const menu = document.getElementById("navigation");

        const isOpen = menu.classList.toggle("open");

        event.currentTarget.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        event.currentTarget.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    }
);


// Закрываем мобильное меню после перехода по ссылке.

document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navigation")
            .classList.remove("open");

        document.getElementById("mobile-menu-button")
            .setAttribute("aria-expanded", "false");

        document.getElementById("mobile-menu-button").innerHTML =
            '<i class="fa-solid fa-bars"></i>';
    });
});


/* =========================================
   14. ПЕРВЫЙ ЗАПУСК
========================================= */

// Текущий год в подвале.

document.getElementById("current-year").textContent =
    new Date().getFullYear();


// Первоначальная отрисовка сайта.

renderColleges();

updateFavoritesCounter();
