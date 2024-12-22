// script.js | Ligne 1
// Fonction pour récupérer la liste d'articles à partir du fichier CSV
function getArticleList() {
  // RÃ©cupÃ©ration du fichier CSV
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'articles.csv?_=' + new Date().getTime());
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Transformation du contenu CSV en tableau d'objets
      const articles = xhr.responseText.trim().split('\n').map(article => {
        const [name, code] = article.split(',');
        return {name: name, code: code};
      });
      // Affichage de la liste d'articles dans le tableau HTML
      const articleList = document.getElementById('article-list');
      articleList.innerHTML = '';
      articles.forEach(article => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${article.name}</td>
          <td>${article.code}</td>
          <td><img src="/test/v2/images/${article.code}.png" style="max-width: 50px; height: 50px;"></td>
          <td class="actions">
            <a href="#" class="uk-icon-link" uk-icon="pencil" uk-tooltip="Modifier" onclick="editArticle('${article.name}', '${article.code}');"></a>
            <a href="#" class="uk-icon-link" uk-icon="trash" uk-tooltip="Supprimer" onclick="deleteArticle('${article.name}');"></a>
          </td>
        `;
        articleList.appendChild(row);
      });
    }
  };
  xhr.send();
}

// Fonction pour rechercher un article dans la liste
function searchArticle() {
  const input = document.getElementById("search-input");
  const filter = input.value.toUpperCase();
  const rows = document.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    const cols = rows[i].getElementsByTagName("td");
    let showRow = false;
    for (let j = 0; j < cols.length; j++) {
      const text = cols[j].innerText.toUpperCase();
      if (text.indexOf(filter) > -1) {
        showRow = true;
        break;
      }
    }
    if (showRow) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}

// script.js | Ligne 30
// Fonction pour ajouter un nouvel article
function addArticle(name, code) {
  // Suppression des guillemets dans le nom de l'article
  name = name.replace(/"/g, '');
  // Création d'une nouvelle ligne dans le fichier CSV
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'add-article.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    // Récupération de la nouvelle liste d'articles
    getArticleList();
  };
  xhr.send(`name=${name}&code=${code}&`);
}
    

// script.js | Ligne 42
// Fonction pour supprimer un article existant
function deleteArticle(name) {
  if (confirm(`Êtes-vous sûr de vouloir supprimer l'article "${name}" ?`)) {
    // Suppression de la ligne correspondant à l'article dans le fichier CSV
    console.log("Suppression de l'article ", name);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'delete-article.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
      // Récupération de la nouvelle liste d'articles
      getArticleList();
    };
    xhr.send(`name=${name}&code=''&`);
  }
}

// script.js | Ligne 56
// Fonction pour pré-remplir le formulaire de modification avec les données d'un article existant
function editArticle(name, code) {
  document.getElementById('edit-article-name').value = name;
  document.getElementById('edit-article-code').value = code;
  document.getElementById('edit-article-modal').click();
}
// script.js | Ligne 63
// Fonction pour enregistrer les modifications d'un article
function saveArticle(name, newCode) {
  // Mise à jour de la ligne correspondant à l'article dans le fichier CSV
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'save-article.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    // Récupération de la nouvelle liste d'articles
    getArticleList();
  };
  xhr.send(`name=${encodeURIComponent(name)}&new_code=${encodeURIComponent(newCode)}&`);
}

// script.js | Ligne 70
// Initialisation de la page
document.addEventListener('DOMContentLoaded', function() {
  // Affichage de la liste d'articles
  getArticleList();

  // Gestion du formulaire d'ajout d'un article
  const addArticleForm = document.querySelector('form');
  addArticleForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('new-article-name').value;
    const code = document.getElementById('new-article-code').value;
    addArticle(name, code);
    addArticleForm.reset();
  });

  // Gestion du formulaire de modification d'un article
  const editArticleForm = document.getElementById('edit-article-form');
  if (editArticleForm) {
    editArticleForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('edit-article-name').value;
      const code = document.getElementById('edit-article-code').value;
      saveArticle(name, code);
      UIkit.modal(document.getElementById('edit-article-modal')).hide();
    });
  }
});

// papaparse.js | Ligne 3
// Fonction pour récupérer la liste d'articles à partir du fichier CSV
Papa.parse('/test/articles.csv?_=' + new Date().getTime(), {
  header: true,
  download: true,
  skipEmptyLines: true, // Ignorer les lignes vides
  complete: function(results) {
    const articles = results.data;
    // Mise à jour de la liste d'articles
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'update-article-list.php');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      // Récupération de la nouvelle liste d'articles
    };
    xhr.send(JSON.stringify(articles));
  }
});