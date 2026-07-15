import {ref, watch} from 'vue';

const STORAGE_KEY = 'theme'

//estado reactivo compartido por toda la app, vive a nivel de modulo
const theme = ref(getInitialTheme());

//devuelve el tema guardado o la preferencial del sistema

function getInitialTheme() {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
}

//se aplica el tema al html y se guarda en localStorage
function applyTheme(value) {
    document.documentElement.setAttribute('data-theme', value)
    localStorage.setItem(STORAGE_KEY, value)
}

//cuando cambie el theme se aplica el efecto
watch(theme, applyTheme, {immediate: true})

export function useTheme() {
    //cambia entre rojo y oscuro
    function toggleTheme() {
        theme.value = theme.value === 'dark' ? 'light' : 'dark'
    }
    return {theme, toggleTheme}
}