const rainbow = document.querySelectorAll('div.card')

for (let color of rainbow) {
    color.addEventListener('click', () => twistCard(color))
}

function twistCard(card) {
    card.classList.add('twisted')
    setTimeout(() => card.classList.remove('twisted'), 3000)
}