class EventCalendar {
    constructor(eventos = {}) {
        this.currentDate = new Date();
        this.currentMonth = this.currentDate.getMonth();
        this.currentYear = this.currentDate.getFullYear();

        this.events = eventos;

        this.months = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];

        this.dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

        this.init();
    }

    init() {
        this.render();
        this.bindEvents();
    }

    bindEvents() {
        document.getElementById('prevMonth').addEventListener('click', () => {
            this.currentMonth--;
            if (this.currentMonth < 0) {
                this.currentMonth = 11;
                this.currentYear--;
            }
            this.render();
        });

        document.getElementById('nextMonth').addEventListener('click', () => {
            this.currentMonth++;
            if (this.currentMonth > 11) {
                this.currentMonth = 0;
                this.currentYear++;
            }
            this.render();
        });

        // Modal events
        const modal = document.getElementById('eventModal');
        const closeBtn = document.querySelector('.close');

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    render() {
        this.renderHeader();
        this.renderCalendar();
    }

    renderHeader() {
        document.getElementById('monthYear').textContent =
            `${this.months[this.currentMonth]} ${this.currentYear}`;
    }

    renderCalendar() {
        const calendar = document.getElementById('calendar');
        calendar.innerHTML = '';

        // Day headers
        this.dayNames.forEach(day => {
            const dayHeader = document.createElement('div');
            dayHeader.className = 'day-header';
            dayHeader.textContent = day;
            calendar.appendChild(dayHeader);
        });

        const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
        const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        const daysInPrevMonth = new Date(this.currentYear, this.currentMonth, 0).getDate();

        // Previous month days
        for (let i = firstDay - 1; i >= 0; i--) {
            const dayElement = this.createDayElement(daysInPrevMonth - i, true);
            calendar.appendChild(dayElement);
        }

        // Current month days
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = this.createDayElement(day, false);
            calendar.appendChild(dayElement);
        }

        // Next month days
        const totalCells = calendar.children.length - 7; // Subtract day headers
        const remainingCells = 42 - totalCells; // 6 rows * 7 days
        for (let day = 1; day <= remainingCells; day++) {
            const dayElement = this.createDayElement(day, true);
            calendar.appendChild(dayElement);
        }
    }

    createDayElement(dayNumber, isOtherMonth) {
        const dayElement = document.createElement('div');
        dayElement.className = `day ${isOtherMonth ? 'other-month' : ''}`;

        const dayNumberElement = document.createElement('div');
        dayNumberElement.className = 'day-number';
        dayNumberElement.textContent = dayNumber;
        dayElement.appendChild(dayNumberElement);

        if (!isOtherMonth) {
            const dateKey = `${this.currentYear}-${String(this.currentMonth + 1).padStart(2, '0')}-${String(dayNumber).padStart(2, '0')}`;
            const dayEvents = this.events[dateKey];
            if (dayEvents) {
                dayEvents.forEach(event => {
                    const eventElement = document.createElement('div');
                    eventElement.className = `event ${event.tipo}`;
                    eventElement.textContent = event.titulo;
                    eventElement.addEventListener('click', (e) => {
                        e.stopPropagation();
                        this.showEventModal(event);
                    });
                    dayElement.appendChild(eventElement);
                });
            }
        }

        return dayElement;
    }

    showEventModal(event) {
        const modal = document.getElementById('eventModal');
        const modalTitle = document.getElementById('modalTitle');
        const eventDetails = document.getElementById('eventDetails');

        modalTitle.textContent = event.titulo;

        eventDetails.innerHTML = `
                    <div class="event-info">
                        <div class="info-item">
                            <span class="info-icon">🕒</span>
                            <span><strong>Hora:</strong> ${event.fechaHora}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-icon">📍</span>
                            <span><strong>Lugar:</strong> ${event.ubicacion}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-icon">📝</span>
                            <span><strong>Descripción:</strong> ${event.descripcion}</span>
                        </div>
                    </div>
                    <button class="buy-btn" onclick="buyTicket(${event.id})">
                        🎫 Comprar Entradas
                    </button>
                `;

        modal.style.display = 'block';
    }
}
// Initialize calendar
new EventCalendar(EventosCalendario);
