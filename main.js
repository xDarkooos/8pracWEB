
const icons = {
    'Work': '<svg width="79" height="79" xmlns="http://www.w3.org/2000/svg"><path d="m18.687 10.43 15.464 30.906c.31.682.743 1.322 1.3 1.88.558.557 1.198.99 1.714 1.217L68.237 59.98 52.484 75.732a8.025 8.025 0 0 1-11.355 0L2.153 36.756a8.025 8.025 0 0 1 0-11.354L18.687 10.43Zm19.345-7.99 10.839 10.838q-.049.049-.098.098c-1.177 1.177-2.255 2.255-3.234 3.234L29.975 3.046l5.73-5.73a8.025 8.025 0 0 1 11.355 0L85.035 35.29a8.025 8.025 0 0 1 0 11.355L56.973 74.707a8.025 8.025 0 0 1-11.355 0L30.154 59.244Z" fill="#FFF" fill-rule="evenodd"/></svg>',
    'Play': '<svg width="76" height="77" xmlns="http://www.w3.org/2000/svg"><path d="m60.91 71.846 12.314-19.892c3.317-5.36 3.78-13.818-2.31-19.908l-26.36-26.36c-4.457-4.457-12.586-6.843-19.908-2.31L4.753 15.69c-5.4 3.343-6.275 10.854-1.779 15.35a7.773 7.773 0 0 0 7.346 2.035l7.783-1.945a3.947 3.947 0 0 1 3.731 1.033l22.602 22.602c.97.97 1.367 2.4 1.033 3.732l-1.945 7.782a7.775 7.775 0 0 0 2.037 7.349c4.49 4.49 12.003 3.624 15.349-1.782Zm-24.227-46.12-1.891-1.892-1.892 1.892a2.342 2.342 0 0 1-3.312-3.312l1.892-1.892-1.892-1.891a2.342 2.342 0 0 1 3.312-3.312l1.892 1.891 1.891-1.891a2.342 2.342 0 0 1 3.312 3.312l-1.891 1.891 1.891 1.892a2.342 2.342 0 0 1-3.312 3.312Zm14.19 14.19a2.343 2.343 0 1 1 3.315-3.312 2.343 2.343 0 0 1-3.314 3.312Zm0 7.096a2.343 2.343 0 0 1 3.313-3.312 2.343 2.343 0 0 1-3.312 3.312Zm7.096-7.095a2.343 2.343 0 1 1 3.312 0 2.343 2.343 0 0 1-3.312 0Zm0 7.095a2.343 2.343 0 0 1 3.312-3.312 2.343 2.343 0 0 1-3.312 3.312Z" fill="#3F9CBB" fill-rule="evenodd"/></svg>',
    'Study': '<svg width="79" height="79" xmlns="http://www.w3.org/2000/svg"><path d="M33.227 1.495a1.87 1.87 0 0 1 2.646 0l1.323 1.323-27.78 27.78c-2.189 2.189-2.1 5.837.088 8.023l12.132 12.132a5.624 5.624 0 0 0 1.096 6.388 5.624 5.624 0 0 0 6.389 1.097l12.132 12.132c2.188 2.188 5.837 2.276 8.025.088l27.78-27.78 1.323 1.322a1.87 1.87 0 0 1 0 2.646L46.632 78.4a1.87 1.87 0 0 1-2.645 0L29.12 63.531a5.624 5.624 0 0 1-6.389-1.097l-5.291-5.291a5.624 5.624 0 0 1-1.097-6.388L1.478 35.89a1.87 1.87 0 0 1 0-2.646ZM59.74 22.783c1.948.27 3.83 1.117 5.325 2.612l10.583 10.583a1.87 1.87 0 0 1 0 2.646L46.544 67.727a1.87 1.87 0 0 1-2.646 0L30.67 54.498a1.872 1.872 0 0 0-2.646 0ZM49.19 6.875a1.87 1.87 0 0 1 2.647 0c4.489 4.489 5.877 8.98 6.178 12.342l-27.04 27.04a1.87 1.87 0 0 1-2.645 0L7.04 25.047a1.87 1.87 0 0 1 0-2.646Z" fill="#F04667" fill-rule="evenodd"/></svg>',
    'Exercise': '<svg width="81" height="55" xmlns="http://www.w3.org/2000/svg"><path d="m33.357.579 16.447.426c.33.009.645.144.88.38l9.953 9.953a4.946 4.946 0 0 1 1.451 3.311l.514 12.87c.02.503.433.895.937.894l9.595-.05a4.438 4.438 0 0 1 4.437 4.43v.26c0 1.164-.453 2.281-1.277 3.105a4.384 4.384 0 0 1-3.105 1.277h-.26l-25.532.133a1.2 1.2 0 0 0-1.084.689l-5.309 11.338a.98.98 0 0 1-.461.461l-5.984 2.92a.5.5 0 0 1-.629-.157l-2.122-3.26a.5.5 0 0 1 .157-.63l5.543-2.7a1.2 1.2 0 0 0 .461-.461l3.77-8.05c.022-.048.05-.093.084-.134l-13.874-.727a1.2 1.2 0 0 1-1.084-.689l-2.439-5.21a.5.5 0 0 1 .157-.63l3.26-2.122a.5.5 0 0 1 .629.157l1.616 2.484a1.2 1.2 0 0 0 1.084.689l6.642-.348a1.2 1.2 0 0 0 1.084-.689l2.439-5.21a1.2 1.2 0 0 0-.461-1.314L1.798 8.58a1.2 1.2 0 0 1-.157-.629L3.517.952a.5.5 0 0 1 .461-.461l5.984-1.876a.5.5 0 0 1 .629.157l2.122 3.26a.5.5 0 0 1-.157.63l-3.584 2.3a1.2 1.2 0 0 0-.461.689l-.514 2.876a1.2 1.2 0 0 0 .461 1.314l14.06 9.954a1.2 1.2 0 0 0 1.084.157l11.857-3.676a1.2 1.2 0 0 0 .689-1.084l-.348-14.06a1.2 1.2 0 0 0-.689-1.084L30.49 1.295a.5.5 0 0 1-.157-.629l2.122-3.26a.5.5 0 0 1 .629-.157l.273.129Z" fill="#29BA66" fill-rule="evenodd"/></svg>',
    'Social': '<svg width="75" height="100" xmlns="http://www.w3.org/2000/svg"><g fill="#5A1CBB" fill-rule="evenodd"><path d="M45.834 46.627c4.78 4.78 13.1 5.754 19.257-.403 5.2-5.199 5.198-13.657 0-18.855L47.151 9.428C42.335 4.614 34.02 3.7 27.892 9.83c-4.701 4.7-5.151 12.066-1.352 17.277l-6.265 6.265c-1.339 1.339-.317 3.644 1.585 3.533l13.474-.777 10.499 10.499Zm11.404-11.483a2.567 2.567 0 1 1-3.629 3.631 2.567 2.567 0 0 1 3.63-3.631ZM35.745 20.909a2.567 2.567 0 1 1 3.63-3.629 2.567 2.567 0 0 1-3.63 3.63Zm12.562 5.303a2.567 2.567 0 1 1-3.63 3.63 2.567 2.567 0 0 1 3.63-3.63ZM55.16 63.698 37.219 45.756c-5.198-5.197-13.658-5.197-18.857.001-6.072 6.073-5.26 14.4-.402 19.258l10.499 10.5-.777 13.473c-.11 1.886 2.186 2.931 3.533 1.584l6.265-6.265c5.212 3.8 12.577 3.349 17.277-1.352 6.06-6.059 5.274-14.386.403-19.257ZM25.813 57.24a2.567 2.567 0 1 1 3.63-3.631 2.567 2.567 0 0 1-3.63 3.63Zm8.932 8.931a2.567 2.567 0 1 1 3.63-3.629 2.567 2.567 0 0 1-3.63 3.63Zm8.932 8.933a2.567 2.567 0 1 1 3.63-3.631 2.567 2.567 0 0 1-3.63 3.63Z"/></g></svg>',
    'Self Care': '<svg width="67" height="67" xmlns="http://www.w3.org/2000/svg"><path d="M.918 50.848c.114 1.723.232 3.5.346 5.336l.003.038.448 6.038c.06.81.412 1.536.951 2.075.54.54 1.266.892 2.075.952l6.038.447.038.003c12.086.755 21.237 1.231 28.95.484 9.007-.873 15.369-3.445 20.02-8.096 8.413-8.413 8.398-21.609-.034-30.041-3.79-3.79-8.959-6.11-14.31-6.526-.415-5.352-2.736-10.52-6.526-14.31C30.484-1.185 17.288-1.2 8.875 7.214-1.295 17.384-.415 30.697.918 50.848ZM21.36 27.122l6.172 6.173 6.16-6.159 6.16 6.159 6.173-6.173-6.158-6.158 6.173-6.173-6.158-6.158-6.173 6.173-6.158-6.158-6.173 6.158 6.173 6.173-6.158 6.158Z" fill="#E6A532" fill-rule="evenodd"/></svg>'
};

let currentTimeframe = 'weekly';

const timeframeLabels = {
    'daily': 'Yesterday',
    'weekly': 'Last Week',
    'monthly': 'Last Month'
};

async function loadData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Не вдалося завантажити data.json');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Помилка завантаження даних:', error);
        // Якщо файл не знайдено, використовуємо дані за замовчуванням
        return getDefaultData();
    }
}

function getDefaultData() {
    return [
        {
            "title": "Work",
            "timeframes": {
                "daily": { "current": 5, "previous": 7 },
                "weekly": { "current": 32, "previous": 36 },
                "monthly": { "current": 103, "previous": 128 }
            }
        },
        {
            "title": "Play",
            "timeframes": {
                "daily": { "current": 1, "previous": 2 },
                "weekly": { "current": 10, "previous": 8 },
                "monthly": { "current": 23, "previous": 29 }
            }
        },
        {
            "title": "Study",
            "timeframes": {
                "daily": { "current": 0, "previous": 1 },
                "weekly": { "current": 4, "previous": 7 },
                "monthly": { "current": 13, "previous": 19 }
            }
        },
        {
            "title": "Exercise",
            "timeframes": {
                "daily": { "current": 1, "previous": 1 },
                "weekly": { "current": 4, "previous": 5 },
                "monthly": { "current": 11, "previous": 18 }
            }
        },
        {
            "title": "Social",
            "timeframes": {
                "daily": { "current": 1, "previous": 3 },
                "weekly": { "current": 5, "previous": 10 },
                "monthly": { "current": 21, "previous": 23 }
            }
        },
        {
            "title": "Self Care",
            "timeframes": {
                "daily": { "current": 0, "previous": 1 },
                "weekly": { "current": 2, "previous": 2 },
                "monthly": { "current": 7, "previous": 11 }
            }
        }
    ];
}

function renderActivities(data) {
    const container = document.getElementById('activities-container');
    container.innerHTML = '';

    data.forEach(activity => {
        // Перетворюємо назву в клас CSS (Work - work, Self Care - self-care)
        const className = activity.title.toLowerCase().replace(' ', '-');
        
        
        const timeframe = activity.timeframes[currentTimeframe];
        const currentHours = timeframe.current;
        const previousHours = timeframe.previous;

       
        const card = document.createElement('div');
        card.className = 'activity-card';
        card.innerHTML = `
            <div class="activity-bg ${className}">
                <div class="activity-icon">
                    ${icons[activity.title] || ''}
                </div>
            </div>
            <div class="activity-content">
                <div class="activity-header">
                    <h2 class="activity-title">${activity.title}</h2>
                    <span class="menu-dots">...</span>
                </div>
                <div class="activity-stats">
                    <div class="current-time">${currentHours}hrs</div>
                    <div class="previous-time">${timeframeLabels[currentTimeframe]} - ${previousHours}hrs</div>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}


async function init() {
    // Завантажуємо дані
    const data = await loadData();
    
    
    renderActivities(data);
    
    // Додаємо обробники подій для кнопок timeframe
    document.querySelectorAll('.timeframe-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Знімаємо active клас з усіх кнопок
            document.querySelectorAll('.timeframe-btn').forEach(b => {
                b.classList.remove('active');
            });
            
            // Додаємо active клас до поточної кнопки
            this.classList.add('active');
            
            // Оновлюємо поточний timeframe
            currentTimeframe = this.dataset.timeframe;
            
            // Перерендерюємо активності
            renderActivities(data);
        });
    });
}

// Запускаємо додаток після завантаження DOM
document.addEventListener('DOMContentLoaded', init);
