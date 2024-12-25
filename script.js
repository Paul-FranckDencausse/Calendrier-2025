document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.getElementById('calendar');
    const months = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

    for (let month = 0; month < 12; month++) {
        const date = new Date(2025, month, 1);
        const firstDay = date.getDay();
        const lastDate = new Date(2025, month + 1, 0).getDate();

        // Afficher le mois
        const monthDiv = document.createElement('div');
        monthDiv.className = 'month';
        monthDiv.innerText = months[month];
        calendar.appendChild(monthDiv);

        // Afficher les jours de la semaine
        for (let i = 0; i < daysOfWeek.length; i++) {
            const dayHeader = document.createElement('div');
            dayHeader.className = 'day day-header';
            dayHeader.innerText = daysOfWeek[i];
            calendar.appendChild(dayHeader);
        }

        // Espaces pour les jours avant le début du mois
        for (let i = 1; i < firstDay; i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.className = 'day';
            calendar.appendChild(emptyDiv);
        }

        // Afficher les jours du mois
        for (let day = 1; day <= lastDate; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'day';
            dayDiv.innerText = day;
            calendar.appendChild(dayDiv);
        }
    }
});
