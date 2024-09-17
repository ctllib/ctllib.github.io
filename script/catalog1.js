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
    { title: 'Алгебра және анализ бастамалары. 1 бөлім. (ЖМБ). ЖМБ. Абылкасымова А.Е', url: 'https://drive.google.com/file/d/1nNHDEMHxxHDpzkjm3nOvOLEWdwm1jPxx/view?usp=sharing' },
    { title: 'Алгебра және анализ бастамалары. 2 бөлім. (ЖМБ). ЖМБ. Абылкасымова А.Е. учебник для 10 класса', url: 'https://drive.google.com/file/d/1EaitTimVi4lXWbX9hs2VAyD1CSinKXiM/view?usp=sharing' },
    { title: 'Алғашқы әскери және технологиялық дайындық . 1 бөлім. (ОБЩ). ОБЩ. Аманжолов К.Р. учебник для 10 класса', url: 'https://drive.google.com/file/d/1VvpdbfddVVGTXtBGMaHSMf85aDZYs_kT/view?usp=sharing' },
    { title: 'Алғашқы әскери және технологиялық дайындық . 2 бөлім. (ОБЩ). ОБЩ. Аманжолов К.Р. учебник для 10 класса', url: 'https://drive.google.com/file/d/1kjLTyjsROHfv_WC18M_cYIhPwrpkluis/view?usp=sharing' },
    { title: 'Биология. 1 бөлім. (ЖМБ). ЖМБ. Очкур Е.А. учебник для 10 класса', url: 'https://drive.google.com/file/d/1FSsxaPq6OqUE828D12zDj28Bje9n3QyZ/view?usp=sharing' },
    { title: 'Биология. 2 бөлім. (ЖМБ). ЖМБ. Очкур Е.А. учебник для 10 класса', url: 'https://drive.google.com/file/d/1n6GtJC3h8kkxeoA4enuqr0syRYPRj6Zn/view?usp=sharing' },
    { title: 'Дүниежүзі тарихы. 1 бөлім. (ЖМБ). ЖМБ. Каирбекова Р.Р. учебник для 10 класса', url: 'https://drive.google.com/file/d/1aYVsJ9D2YkxSWV-SAPoNhdXF2XyHQ1_4/view?usp=sharing' },
    { title: 'Дүниежүзі тарихы. 2 бөлім. (ЖМБ). ЖМБ. Каирбекова Р.Р. учебник для 10 класса', url: 'https://drive.google.com/file/d/1rlj7xUyUKS_ZUNHIS0VnYdhuIrwbA99S/view?usp=sharing' },
    { title: 'Қазақ әдебиеті. (ЖМБ). ЖМБ. Дерибаев С. учебник для 10 класса', url: 'https://drive.google.com/file/d/1YGe0s4I1iFUg_zH1LJ-DOzy5pXdta2Dt/view?usp=sharing' },
    { title: 'Қазақ тілі мен әдебиеті . (ОБЩ). ОБЩ. Косымова Г. учебник для 10 класса', url: 'https://drive.google.com/file/d/19DdJg5pECRuFxWyi-EU1CNblwnQA2n98/view?usp=sharing' },
    { title: 'Қазақ тілі. (ҚГБ). ҚГБ. Қапалбек Б. учебник для 10 класса', url: 'https://drive.google.com/file/d/1kkxdzEkcWBJM_18xGbw3NeVyfZFEGdyf/view?usp=sharing' },
    { title: 'Қазақстан тарихы. (ОБЩ). ОБЩ. Қайырбекова Р.Р. учебник для 10 класса', url: 'https://drive.google.com/file/d/1bHGsnU_bXmxx4C71KveViBAyn13SOWNS/view?usp=sharing' },
    { title: 'Құқық негіздері. (ЖМБ). ЖМБ. Ибраева А.С. учебник для 10 класса', url: 'https://drive.google.com/file/d/1zY4r-LpUZN7ThcYcRlqh9HI90yBVeINg/view?usp=sharing' },
    { title: 'Құқық негіздері. 1 бөлім. (ҚГБ). ҚГБ. Ибраева А.С. учебник для 10 класса', url: 'https://drive.google.com/file/d/1aoRqDvrh2xA3vqYm5t_DYvGVowqKYNwF/view?usp=sharing' },
    { title: 'Құқық негіздері. 2 бөлім. (ҚГБ). ҚГБ. Ибраева А.С. учебник для 10 класса', url: 'https://drive.google.com/file/d/1I0FcwgXyAQDGxYfU4m_bbEt87BMLaho3/view?usp=sharing' },
    { title: 'Физика. 1 бөлім. (ЖМБ). ЖМБ. Кронгарт Б. учебник для 10 класса', url: 'https://drive.google.com/file/d/1idmSpZvR4zo1geQj9KC-PuJ7e8dfyg0e/view?usp=sharing' },
    { title: 'Физика. 2 бөлім. (ЖМБ). ЖМБ. Кронгарт Б. учебник для 10 класса', url: 'https://drive.google.com/file/d/1iRIKZ_ezLh1jHXyr6xQRRGtT2vapFN7f/view?usp=sharing' },
    { title: 'Химия. 1 бөлім. (ЖМБ). ЖМБ. Оспанова М.К. учебник для 10 класса', url: 'https://drive.google.com/file/d/1uNOzeakayR5LKMpXZwqfu91p9NS64lvP/view?usp=sharing' },
    { title: 'Химия. 1 бөлім. (ҚГБ). ҚГБ. Оспанова М.К. учебник для 10 класса', url: 'https://drive.google.com/file/d/1prgTHgwuKzI_GKPgkCFt1AUC2qhZk75v/view?usp=sharing' },
    { title: 'Химия. 2 бөлім. (ЖМБ). ЖМБ. Оспанова М.К. учебник для 10 класса', url: 'https://drive.google.com/file/d/1Gxv9TGFOnFi7H5tZ3mGOsHhSuYsgnjbj/view?usp=sharing' },
    { title: 'Химия. 2 бөлім. (ҚГБ). ҚГБ. Оспанова М.К. учебник для 10 класса', url: 'https://drive.google.com/file/d/1BMcbu5s0mqFgKdtsOPGnuswV4WZF9as5/view?usp=sharing' },
    { title: 'Алгебра и начала анализа . Часть 1. (ЕМН). ЕМН. Абылкасымова А.Е. учебник для 10 класса', url: 'https://drive.google.com/file/d/1MlDx8EhncHsI0How1NTBw-anb6Z3zHVx/view?usp=sharing' },
    { title: 'Алгебра и начала анализа . Часть 2. (ЕМН). ЕМН. Абылкасымова А.Е. учебник для 10 класса', url: 'https://drive.google.com/file/d/1c_LAoqg9S6hMIHgHNPlxs49kGSQvKWmn/view?usp=sharing' },
    { title: 'Алгебра и начала анализа. (ОГН). ОГН. Абылкасымова А.Е. учебник для 10 класса', url: 'https://drive.google.com/file/d/1keqGqRk9OoTFQx0YrplUq2X-pxifB-ij/view?usp=sharing' },
    { title: 'Биология. Часть 1. (ЕМН). ЕМН. Очкур Е.А. учебник для 10 класса', url: 'https://drive.google.com/file/d/1MNLKO3Sv0iaa3QAJRwAHdvbgYuYezmUG/view?usp=sharing' },
    { title: 'Биология. Часть 2. (ЕМН). ЕМН. Очкур Е.А. учебник для 10 класса', url: 'https://drive.google.com/file/d/16v2sfBHLfDZwGJNPansfx4TcnzESz2hu/view?usp=sharing' },
    { title: 'Всемирная история. Часть 1. (ЕМН). ЕМН. Каирбекова Р.Р. учебник для 10 класса', url: 'https://drive.google.com/file/d/1awrY6HNXgIbwnERVTqPiX8AuncpM7kxE/view?usp=sharing' },
    { title: 'Всемирная история. Часть 1. (ОГН). ОГН. Каирбекова Р.Р. учебник для 10 класса', url: 'https://drive.google.com/file/d/1o4uvwqs6eZ5ciYSH3xLKmonLTNSnhxwI/view?usp=sharing' },
    { title: 'Всемирная история. Часть 2. (ЕМН). ЕМН. Каирбекова Р.Р. учебник для 10 класса', url: 'https://drive.google.com/file/d/1mV3RTYlK4P8RfGxemWtvhRDXyrPl4Ow0/view?usp=sharing' },
    { title: 'Всемирная история. Часть 2. (ОГН). ОГН. Каирбекова Р.Р. учебник для 10 класса', url: 'https://drive.google.com/file/d/1U__RUrpDKGr1t316rzWJwRrOWFPwWTlN/view?usp=sharing' },
    { title: 'География. (ЕМН). ЕМН. Каймулдинова К. учебник для 10 класса', url: 'https://drive.google.com/file/d/1G8v-K8CSHMOlGquPFlvuYXeVJlKheZ0w/view?usp=sharing' },
    { title: 'География. (ОГН). ОГН. Саитов А. учебник для 10 класса', url: 'https://drive.google.com/file/d/1raq5mL--UQI-oGSwI40TaAyWJOb0LEok/view?usp=sharing' },
    { title: 'Геометрия. (ЕМН). ЕМН. Смирнов В.А. учебник для 10 класса', url: 'https://drive.google.com/file/d/1xSMsAH-VIaXgpZ08S2GBtndPUW8W45ru/view?usp=sharing' },
    { title: 'Геометрия. (ОГН). ОГН. Смирнов В.А. учебник для 10 класса', url: 'https://drive.google.com/file/d/1WHLlhoV3ls05_6fcwVy6Gtct4IMz7jzV/view?usp=sharing' },
    { title: 'Информатика. (ЕМН). ЕМН. Кольева Н. учебник для 10 класса', url: 'https://drive.google.com/file/d/1q2kgXwMVGzxuJgB6ZUMC0IgWPLnPqoJy/view?usp=sharing' },
    { title: 'История Казахстана. (ОБЩ). ОБЩ. Каирбекова Р.Р. учебник для 10 класса', url: 'https://drive.google.com/file/d/1QBzEGC4GLjOEfARGONltEZA6CKqsP0FG/view?usp=sharing' },
    { title: 'Қазақ тілі мен әдебиеті . (ОБЩ). ОБЩ. Косымова Г. учебник для 10 класса', url: 'https://drive.google.com/file/d/11bM4XUi8RqgOkOPf4PRF11SixkjuX1g2/view?usp=sharing' },
    { title: 'Начальная военная и технологическая подготовка . Часть 1. (ОБЩ). ОБЩ. Аманжолов К.Р. учебник для 10 класса', url: 'https://drive.google.com/file/d/19JaNJtbb5zR9-vkoYE6Xb-TC8FG1O-uE/view?usp=sharing' },
    { title: 'Начальная военная и технологическая подготовка Учебно-полевые сборы. Часть 2. (ОБЩ). ОБЩ. Аманжолов К.Р. учебник для 10 класса', url: 'https://drive.google.com/file/d/1CuZEcbY09sW6c12ucRQX4r--iPVYAGtl/view?usp=sharing' },
    { title: 'Основы права. . (ЕМН). ЕМН. Ибраева А.С. учебник для 10 класса', url: 'https://drive.google.com/file/d/1jk9Qg5JbvTNw-VCGauBFW4qDlPDuaQve/view?usp=sharing' },
    { title: 'Основы права. Часть 1. (ОГН). ОГН. Ибраева А.С. учебник для 10 класса', url: 'https://drive.google.com/file/d/1whW1XfeBK7h13W5mm09jxuBT_Cs5y67p/view?usp=sharing' },
    { title: 'Основы права. Часть 2. (ОГН). ОГН. Ибраева А.С. учебник для 10 класса', url: 'https://drive.google.com/file/d/1xryPYZm65eiMYLe_MIsHNK7tJD98AlkJ/view?usp=sharing' },
    { title: 'Русская литература . (ОГН). ОГН. Салханова Ж.Х. учебник для 10 класса', url: 'https://drive.google.com/file/d/1MNK8-3VTHakfcRrtBBJfcfMCGdN0B2x6/view?usp=sharing' },
    { title: 'Русская литература. (ЕМН). ЕМН. Салханова Ж.Х. учебник для 10 класса', url: 'https://drive.google.com/file/d/1eVzN5qSK00RjxQxhfc6oaJWrxRjRTnpT/view?usp=sharing' },
    { title: 'Русский язык и литература. . (ОБЩ). ОБЩ. Салханова Ж.Х. учебник для 10 класса', url: 'https://drive.google.com/file/d/1Ak6KZN50VbYKHxwp990lRgOT7Ydvwnml/view?usp=sharing' },
    { title: 'Русский язык. (ЕМН). ЕМН. Сабитова З.К. учебник для 10 класса', url: 'https://drive.google.com/file/d/14C_VRQmRxt7PNOKp7hylpspXzv3X62UT/view?usp=sharing' },
    { title: 'Русский язык. (ОГН). ОГН. Сабитова З.К. учебник для 10 класса', url: 'https://drive.google.com/file/d/1SkOQNIa9Y1KnmzZYl6ZiOQn0BNAbCnuX/view?usp=sharing' },
    { title: 'Физика. (ОГН). ОГН. Казахбаеваа Д.М. учебник для 10 класса', url: 'https://drive.google.com/file/d/18CsMb92kdp_4rZmwIB-eZosA9vkYSQ2C/view?usp=sharing' },
    { title: 'Физика. Часть 1. (ЕМН). ЕМН. Кронгарт Б. учебник для 10 класса', url: 'https://drive.google.com/file/d/10zLlavJf7GuwFlyvSRpB-bPKlyPUbf-5/view?usp=sharing' },
    { title: 'Физика. Часть 2. (ЕМН). ЕМН. Кронгарт Б. учебник для 10 класса', url: 'https://drive.google.com/file/d/1SS4OyFOPihxfDpCq_wKmTmg1y-nvmKxv/view?usp=sharing' },
    { title: 'Химия. Часть 1. (ЕМН). ЕМН. Оспанова М.К. учебник для 10 класса', url: 'https://drive.google.com/file/d/1mamwVTNPwZC4t0Vh-s-L9jtbAmE_oppd/view?usp=sharing' },
    { title: 'Химия. Часть 1. (ОГН). ОГН. Оспанова М.К. учебник для 10 класса', url: 'https://drive.google.com/file/d/1iDGQ6FhzvZzzf3zlQagTrjjQ8h23AyCy/view?usp=sharing' },
    { title: 'Химия. Часть 2. (ЕМН). ЕМН. Оспанова М.К. учебник для 10 класса', url: 'https://drive.google.com/file/d/1yYac43LhcuoPV9jeHuHEsB6wMgNVgCrQ/view?usp=sharing' },
    { title: 'Химия. Часть 2. (ОГН). ОГН. Оспанова М.К. учебник для 10 класса', url: 'https://drive.google.com/file/d/16gR98KvBWqcpIUMkVISgP4O8gYBZCJ3R/view?usp=sharing' },
    { title: 'Алгебра және анализ бастамалары. (ЖМБ). ЖМБ. Әбілқасымова А.Е. учебник для 11 класса', url: 'https://drive.google.com/file/d/1WrnQ2pKPVWSHXPXHENXaHXfh-rx3cdpe/view?usp=sharing' },
    { title: 'Алгебра және анализ бастамалары. (ҚГБ). ҚГБ. Әбілқасымова А.Е. учебник для 11 класса', url: 'https://drive.google.com/file/d/1H7vGb4u2s6fKM5XYCvWPVO8ZWUAyHr4E/view?usp=sharing' },
    { title: 'Алғашқы әскери және технологиялық дайындық . (ОБЩ). ОБЩ. Тасбулатов А. учебник для 11 класса', url: 'https://drive.google.com/file/d/1Rphf0M2vyyYeRITYZ03KgOPKPcacjpmk/view?usp=sharing' },
    { title: 'Биология. (ҚГБ). ҚГБ. Абылайханова Н.Т. учебник для 11 класса', url: 'https://drive.google.com/file/d/1_7YZ9IHYzjZN3Xp8g2UAn8SaoH7QxwZK/view?usp=sharing' },
    { title: 'Биология. 1 бөлім. (ЖМБ). ЖМБ. Абылайханова Н.Т. учебник для 11 класса', url: 'https://drive.google.com/file/d/1gOj9BBdPCUPYW5wuVwwqCDQQMNLfSn8O/view?usp=sharing' },
    { title: 'Биология. 2 бөлім. (ЖМБ). ЖМБ. Абылайханова Н.Т. учебник для 11 класса', url: 'https://drive.google.com/file/d/1kzjQ4CKxmxvC75XFcxRDJfpSbzlvesQW/view?usp=sharing' },
    { title: 'Геометрия. (ЖМБ). ЖМБ. Смирнов В.А. учебник для 11 класса', url: 'https://drive.google.com/file/d/10YhxnVfn6mrxXy7IfqtLkzGeweyuAh8t/view?usp=sharing' },
    { title: 'Геометрия. (ҚГБ). ҚГБ. Смирнов В.А. учебник для 11 класса', url: 'https://drive.google.com/file/d/1g2aF8zPdX2jjawvfGsyrgVUcNh7y_18O/view?usp=sharing' },
    { title: 'Графика және жобалау. (ОБЩ). ОБЩ. Нәби Ы. учебник для 11 класса', url: 'https://drive.google.com/file/d/1dZDGWde1KUw6Aq68CibhuQKzX_ODdqQD/view?usp=sharing' },
    { title: 'Дүниежүзі тарихы. (ЖМБ). ЖМБ. Қайырбекова Р.Р. учебник для 11 класса', url: 'https://drive.google.com/file/d/1EvMd1BU5jRz6Nprg53t1pgHTafJ3ItsD/view?usp=sharing' },
    { title: 'Дүниежүзі тарихы. 1 бөлім. (ҚГБ). ҚГБ. Қайырбекова Р.Р. учебник для 11 класса', url: 'https://drive.google.com/file/d/1Hd0QsIzUdc8gPDz-NlOAKcEsyKaAse1H/view?usp=sharing' },
    { title: 'Дүниежүзі тарихы. 2 бөлім. (ҚГБ). ҚГБ. Қайырбекова Р.Р. учебник для 11 класса', url: 'https://drive.google.com/file/d/15SYPG__z9mOCua4X2FbXIGIqWEX0sXkc/view?usp=sharing' },
    { title: 'Қазақ әдебиеті. (ЖМБ). ЖМБ. Орда Г. учебник для 11 класса', url: 'https://drive.google.com/file/d/1wGSUCK8bwZHuOkGd3u56FQ13Y43C0fr0/view?usp=sharing' },
    { title: 'Қазақ әдебиеті. (ҚГБ). ҚГБ. Орда Г. учебник для 11 класса', url: 'https://drive.google.com/file/d/1tLXGBe_44ApyvGeOFFYCMdngXryZBvX2/view?usp=sharing' },
    { title: 'Қазақ тілі мен әдебиеті. (ОБЩ). ОБЩ. Косымова Г. учебник для 11 класса', url: 'https://drive.google.com/file/d/1tayin30V2o_WwXgzB-DP3iFE-1SOANj7/view?usp=sharing' },
    { title: 'Қазақ тілі. (ЖМБ). ЖМБ. Қапалбек Б. учебник для 11 класса', url: 'https://drive.google.com/file/d/16jYQwH6kq306eO13jXmOiBjRav8NN3SH/view?usp=sharing' },
    { title: 'Қазақ тілі. (ҚГБ). ҚГБ. Қапалбек Б. учебник для 11 класса', url: 'https://drive.google.com/file/d/1qYk8hhw2NrN49pO759cUqP2MzgN8LOLG/view?usp=sharing' },
    { title: 'Қазақстан тарихы. (ОБЩ). ОБЩ. Джандосова З.А. учебник для 11 класса', url: 'https://drive.google.com/file/d/1WE_XrW18Qztzafw89iwnyJb1zcU45mIY/view?usp=sharing' },
    { title: 'Құқық негіздері. (ЖМБ). ЖМБ. Ибраева А.С. учебник для 11 класса', url: 'https://drive.google.com/file/d/1KyxDqCrf7gQwD7DFK6h5Sy4EJVXvIbv2/view?usp=sharing' },
    { title: 'Құқық негіздері. 1 бөлім. (ҚГБ). ҚГБ. Ибраева А.С. учебник для 11 классаitle', url: 'https://drive.google.com/file/d/1kGJhopeecrxiTsrM7sgRRsHjK4L319sK/view?usp=sharing' },
    { title: 'Құқық негіздері. 2 бөлім. (ҚГБ). ҚГБ. Ибраева А.С. учебник для 11 класса', url: 'https://drive.google.com/file/d/1m1qInkgXRT7IC7h7rBHruqIfvt1-3YI1/view?usp=sharing' },
    { title: 'Физика. (ҚГБ). ҚГБ. Туякбаев С.Т. учебник для 11 класса', url: 'https://drive.google.com/file/d/13JMNA6gJsJ8zV-3umgFuWqjkJEZWhFui/view?usp=sharing' },
    { title: 'Физика. 1 бөлім. (ЖМБ). ЖМБ. Туякбаев С.Т. учебник для 11 класса', url: 'https://drive.google.com/file/d/1kMOfjloYamZblJaa1s7qbmrMa7A2282P/view?usp=sharing' },
    { title: 'Физика. 2 бөлім. (ЖМБ). ЖМБ. Туякбаев С.Т. учебник для 11 класса', url: 'https://drive.google.com/file/d/1qAVWVkAn7QxrfviZqskqGAbfjBIkMc2r/view?usp=sharing' },
    { title: 'Химия. (ҚГБ). ҚГБ. Оспанова М.К. учебник для 11 класса', url: 'https://drive.google.com/file/d/1-V02jivlaUtiXB3RgBmoxYMNf_fU6tvy/view?usp=sharing' },
    { title: 'Химия. 1 бөлім. (ЖМБ). ЖМБ. Оспанова М.К. учебник для 11 класса', url: 'https://drive.google.com/file/d/1ANSX0PtyCqqztIOHqXwS4j8GRiWIc3ZP/view?usp=sharing' },
    { title: 'Химия. 2 бөлім. (ЖМБ). ЖМБ. Оспанова М.К. учебник для 11 класса', url: 'https://drive.google.com/file/d/1q_7hUPpBI4nTceGik3HG8dcpaqF007hi/view?usp=sharing' },
    { title: 'Алгебра и начала анализа. (ЕМН). ЕМН. Абылкасымова А.Е. учебник для 11 класса', url: 'https://drive.google.com/file/d/1lhfGAQsUqubJAg3wtYr4hVXnMJizQHGs/view?usp=sharing' },
    { title: 'Алгебра и начала анализа. (ОГН). ОГН. Абылкасымова А.Е. учебник для 11 класса', url: 'https://drive.google.com/file/d/1HN9ZVA08w2ebW9RSQbmDVfHQGkZUu-ro/view?usp=sharing' },
    { title: 'Биология. (ОГН). ОГН. Абылайханова Н.Т. учебник для 11 класса', url: 'https://drive.google.com/file/d/1R_0kLd4DcgytefY_b9l9wSk1zbtgsEWp/view?usp=sharing' },
    { title: 'Биология. Часть 1. (ЕМН). ЕМН. Абылайханова Н.Т. учебник для 11 класса', url: 'https://drive.google.com/file/d/1dbw9yVusniIF1pMQQHte9CZn6A3_-MLO/view?usp=sharing' },
    { title: 'Биология. Часть 2. (ЕМН). ЕМН. Абылайханова Н.Т. учебник для 11 класса', url: 'https://drive.google.com/file/d/1N2qYZVOfC__jMGx64JOxRSUTMh72h_pv/view?usp=sharing' },
    { title: 'Всемирная история. (ЕМН). ЕМН. Қайырбекова Р.Р. учебник для 11 класса', url: 'https://drive.google.com/file/d/1K_0nFr8GGkTBzikZoOptY0EGvFPJLqdr/view?usp=sharing' },
    { title: 'Всемирная история. Часть 1. (ОГН). ОГН. Каирбекова Р.Р. учебник для 11 класса', url: 'https://drive.google.com/file/d/1bZM7UaevJqA1TIDd0Kp_p0R12jh7DHZA/view?usp=sharing' },
    { title: 'Всемирная история. Часть 2. (ОГН). ОГН. Каирбекова Р.Р. учебник для 11 класса', url: 'https://drive.google.com/file/d/1UAARPrGRb2xlkIwCMEbptJkumtQIIFko/view?usp=sharing' },
    { title: 'Геометрия. (ЕМН). ЕМН. Смирнов В.А. учебник для 11 класса', url: 'https://drive.google.com/file/d/1BgayWrwEpeKt8jyvPgB0BOy-eA8bdwIL/view?usp=sharing' },
    { title: 'Геометрия. (ОГН). ОГН. Смирнов В.А. учебник для 11 класса', url: 'https://drive.google.com/file/d/1WbjNeYM4Iodm_qw3OawFkLDCjfyPl7d2/view?usp=sharing' },
    { title: 'Графика и проектирование. (ОБЩ). ОБЩ. Нәби Ы. учебник для 11 класса', url: 'https://drive.google.com/file/d/13-yqLWHpAkfXivmaHIiq4s93cdO22Gkv/view?usp=sharing' },
    { title: 'История Казахстана. (ОБЩ). ОБЩ. Джандосова З.А. учебник для 11 класса', url: 'https://drive.google.com/file/d/1PIO6xC08GBcreYTr9kLp0tvB8VU0-iru/view?usp=sharing' },
    { title: 'Начальная военная и технологическая подготовка. (ОБЩ). ОБЩ. В.А. Лим учебник для 11 класса', url: 'https://drive.google.com/file/d/1yl4oRQhKcYOqb-7QC1M0H_T8FIIomhSF/view?usp=sharing' },
    { title: 'Основы права 2-часть. Часть 2. (ОГН). ОГН. Ибраева А.С. учебник для 11 класса', url: 'https://drive.google.com/file/d/1yl4oRQhKcYOqb-7QC1M0H_T8FIIomhSF/view?usp=sharing' },
    { title: 'Основы права. (ЕМН). ЕМН. Ибраева А.С. учебник для 11 класса', url: 'uhttps://drive.google.com/file/d/1DgFLz_-4TyBFH-jsmPPX7ExMjrzMGB9l/view?usp=sharingrl3' },
    { title: 'Основы права. Часть 1. (ОГН). ОГН. Ибраева А.С. учебник для 11 класса', url: 'https://drive.google.com/file/d/1g4p4w4uxB7vmhrr3E7qWUvuoZ9pjrU2E/view?usp=sharing' },
    { title: 'Русский язык и литература. Часть 1. (ОБЩ). ОБЩ. Шашкина Г.З. учебник для 11 класса', url: 'https://drive.google.com/file/d/1aGgbiG58bsBQ0pXb7Or_uzuSEYzvjGmF/view?usp=sharing' },
    { title: 'Русский язык и литература. Часть 2. (ОБЩ). ОБЩ. Шашкина Г.З. учебник для 11 класса', url: 'https://drive.google.com/file/d/1rCaTPYp6lQMuTrYr8PDgDwPXhqv5dkGO/view?usp=sharing' },
    { title: 'Русский язык. (ЕМН). ЕМН. Сабитова З.К. учебник для 11 класса', url: 'https://drive.google.com/file/d/1Il5KNbC4wRDT8Zr5acN3-EoQvcALimXb/view?usp=sharing' },
    { title: 'Русский язык. (ОГН). ОГН. Сабитова З.К. учебник для 11 класса', url: 'https://drive.google.com/file/d/1-aXb5q4HDVentfhXpS64dIEZu8XyQfDQ/view?usp=sharing' },
    { title: 'Физика. (ОГН). ОГН. Туякбаев С.Т. учебник для 11 класса', url: 'https://drive.google.com/file/d/1Uu8ITcC0nbIcoZa3mn9RYS6fv1mfGhyi/view?usp=sharing' },
    { title: 'Физика. Часть 1. (ЕМН). ЕМН. Туякбаев С.Т. учебник для 11 класса', url: 'https://drive.google.com/file/d/1XeVK273LIG4NfpX3FeBCY7wu_cGtH6yW/view?usp=sharing' },
    { title: 'Физика. Часть 2. (ЕМН). ЕМН. Туякбаев С.Т. учебник для 11 класса', url: 'https://drive.google.com/file/d/1RQUAV3dhn0psSnCAthaJD7ge44MS1RRR/view?usp=sharing' },
    { title: 'Химия. (ОГН). ОГН. Оспанова М.К. учебник для 11 класса', url: 'https://drive.google.com/file/d/1dIXRmwDkMeEx8dhEId4XbVg6WkGCuix7/view?usp=sharing' },
    { title: 'Химия. Часть 1. (ЕМН). ЕМН. Оспанова М.К. учебник для 11 класса', url: 'https://drive.google.com/file/d/1ANN84KUWt5mMREDmsP2N8RtXuHxzA6h4/view?usp=sharing' },
    { title: 'Химия. Часть 2. (ЕМН). ЕМН. Оспанова М.К. учебник для 11 класса', url: 'https://drive.google.com/file/d/1weSpfaH5_yrC8XIU_m2_dSMTAUsIERWN/view?usp=sharing' },
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
