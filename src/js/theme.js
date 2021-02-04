const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body')
}
 
savedTeme();

refs.checkbox.addEventListener('change', changeTheme);

function changeTheme(event) {
  const input = event.currentTarget.checked;
  if (input) {
    darkTheme();
   return
  } 
    ligthTheme(); 
  }    

  
function darkTheme() {
    refs.body.classList.add(`${Theme.DARK}`);
  refs.body.classList.remove(`${Theme.LIGHT}`);
   localStorage.setItem('theme', Theme.DARK);
}

function ligthTheme() {
    refs.body.classList.remove(`${Theme.DARK}`);
  refs.body.classList.add(`${Theme.LIGHT}`);
  localStorage.setItem('theme', Theme.LIGHT);
}
 
function savedTeme() {
  const savedCurrentTeme = localStorage.getItem('theme');
  if (savedCurrentTeme === Theme.DARK) {
    refs.checkbox.setAttribute('checked', true);
    darkTheme();
    return
  }
    ligthTheme();
}