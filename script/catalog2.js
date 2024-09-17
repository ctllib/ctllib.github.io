document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const books = document.querySelectorAll('.book-item');

    books.forEach(function(book) {
        const title = book.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
});

// Пример данных для книг (можно заменить на динамическое получение из базы данных)
const booksData = [
    { title: '1. Руководство по интеграции программы нравственно-духовного образования «Самопознание» в образовательную область', url: 'https://drive.google.com/file/d/1c36Y04ighffksg1HXDmwcdJ_6_6YpHLH/view?usp=drive_link' },
    { title: '1.Настройка и обслуживание программно-аппаратного обеспечения компьютера', url: 'https://drive.google.com/file/d/1WjMjwKSCB3TdxqKQwJMpwX1d-RDWVO5y/view?usp=drive_link' },
    { title: '2 Ғимараттар мен құрылыстардың құрылмалары', url: 'https://drive.google.com/file/d/1336n2c-pEAH2lG2a9Bre6Hr8MwTmvosc/view?usp=drive_link' },
    { title: '2. Основы семейного воспитания', url: 'https://drive.google.com/file/d/1qoP1BDMQcf_IZlvHHZKBgtdHZ735ETmY/view?usp=drive_link' },
    { title: '2. Создание Web страниц, сайтов с приенением Web технологий', url: 'https://drive.google.com/file/d/1NuUZD86EamxXoxNr0khOVkL7EAsUQU_q/view?usp=drive_link' },
    { title: '3. Основы педагогической этики', url: 'https://drive.google.com/file/d/11rmrBLDKARDCo2I3yyTFD2J3355Y2EsA/view?usp=drive_link' },
    { title: '4 Ғимараттарды техникалық пайдалану', url: 'https://drive.google.com/file/d/15sPfy436bk3XVwSB_d-Kai92v8V0ShVw/view?usp=drive_link' },
    { title: '71 WEB ТЕХНОЛОГИЯЛАРДЫ ҚОЛДАНЫП, WEB ПАРАҚШАЛАР МЕН САЙТТАР ӘЗІРЛЕУ', url: 'https://drive.google.com/file/d/1Io3ROBJXuLRxgXGhWn4uBiqLfDZpRrPX/view?usp=drive_link' },
    { title: 'Введение в языки программирования (1)', url: 'https://drive.google.com/file/d/1FVdALXKMdezB_odutrNRTTEM_bFxaE6Y/view?usp=drive_link' },
    { title: 'Введение в языки программирования', url: 'https://drive.google.com/file/d/1HnoXTNvDJL9WQ5IzWMGAPlTII9OltzTZ/view?usp=drive_link' },
    { title: 'Голубев Ағылшын тілі. Оқулық — копия', url: 'https://drive.google.com/file/d/1Mr6lKCb-nnfjow5OpDTjV6TGDxcxiO-u/view?usp=drive_link' },
    { title: 'Ермолаев Автоматтандырылған жабдықтарға арналған бағдарламалау. Оқулық', url: 'https://drive.google.com/file/d/10q1u9yHp-bvaTU7ZgBQ0GTsFaqGQg0LS/view?usp=drive_link' },
    { title: 'Интерьерді жобалау (1)', url: 'https://drive.google.com/file/d/1QYLXHxchFxV2KNWD4w0Y5TYNtrJV1mEv/view?usp=drive_link' },
    { title: 'казСемакинОсновы алгоритмизации и программирования_Практикум (1)', url: 'https://drive.google.com/file/d/119oMS_sAZ493v68JTpQsmC7AzZZ1i8gd/view?usp=drive_link' },
    { title: 'Келим Есептеуіш техника. Оқулық.docx', url: 'https://drive.google.com/file/d/1iVCDKwoRRe9T2xLAec-PJtrHMn6Yw2Ck/view?usp=drive_link' },
    { title: 'Компьютердің бағдарламалық-аппараттық қамтамасыз етілуін баптау (2)', url: 'https://drive.google.com/file/d/1ZbpCqQtLVEE29kaq2M0A64xPyVKdJB5x/view?usp=drive_link' },
    { title: 'Қонақ үй бизнесіндегі менеджмент', url: 'https://drive.google.com/file/d/1N736myPxLv_6Tu0J_SFnPK8J2D9YmT6U/view?usp=drive_link' },
    { title: 'Мезенцев АВТОМАТТАНДЫРЫЛҒАН АҚПАРАТТЫҚ ЖҮЙЕЛЕР. Оқулық', url: 'https://drive.google.com/file/d/1KlULd-T-DelgmdnUuevAhp8AM--fclnA/view?usp=drive_link' },
    { title: 'Михеева Кәсіби қызметтегі ақпараттық технологиялар. Техникалық мамандықтар. Оқулық', url: 'https://drive.google.com/file/d/1vZIoMBqv8iBlI5xlCvXuKFDnRkJLsHvM/view?usp=drive_link' },
    { title: 'Михеева КӘСІПТІК ҚЫЗМЕТТЕГІ АҚПАРАТТЫҚ ТЕХНОЛОГИЯЛАР  БОЙЫНША ТӘЖІРИБЕЛІК ЖҰМЫС. Оқу құралы', url: 'https://drive.google.com/file/d/1wPhtNTbfij7SSxAMKDbjHTCY0W1poJHT/view?usp=drive_link' },
    { title: 'Михеева Эконом. және бухг. кәсіби қызм. ақпараттық технол.   Практикум. Оқу құралы', url: 'https://drive.google.com/file/d/14gW1ZES-Hny_PuXDDuv0rvGmxzthts68/view?usp=drive_link' },
    { title: 'Михеева_Информатика. Оқулық', url: 'https://drive.google.com/file/d/1HdKP0Uc03i8Jdv3jThSc6JEi5S8jxbgA/view?usp=drive_link' },
    { title: 'Официальное руководство (ISC)® по обеспечению безопасности информационных систем CISSP®-ISSMP® CBK® Наиболее полный сборник отрасле', url: 'https://drive.google.com/file/d/1te5vV6smYB0goc64GsNtpGBQD8UyzGMX/view?usp=drive_link' },
    { title: 'Паклина Инфокоммуникациялық технологиялар және  кәсіпорындарындағы байланыс жүйелері. Оқулық', url: 'https://drive.google.com/file/d/1BLcV7dVvYVX-QllsAJC8JLxBXrBOdFUD/view?usp=drive_link' },
    { title: 'Рудаков_Бағдарламалық өнімдерді әзірлеу технологиясы.  Практикум. Оқу құралы', url: 'https://drive.google.com/file/d/1JNt3YdXH8066Gnb9GV2q7gICMd9423zb/view?usp=drive_link' },
    { title: 'Семакин_Алгоритмдеу және бағдарламалау негіздері. Практикум. Оқу құралы', url: 'https://drive.google.com/file/d/1nCewsOE7D3-BIkMu3-3lqv6y-4K12BuZ/view?usp=drive_link' },
    { title: 'Тозик Компьютерлік графика және дизайн. Оқулық', url: 'https://drive.google.com/file/d/1PF4LMNBMiTJCktZdiFLOkX_3pV8a3NQw/view?usp=drive_link' },
];

const booksList = document.getElementById('books-list');

booksData.forEach(function(book) {
    const bookItem = document.createElement('div');
    bookItem.classList.add('book-item');
    bookItem.innerHTML = `
        <a href="${book.url}">
            <h3>${book.title}</h3>
        </a>
    `;
    booksList.appendChild(bookItem);
});
