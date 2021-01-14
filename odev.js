window.mockApiUrl = "https://5ff1a6b7db1158001748b316.mockapi.io/pets/";

window.removePet = (id) => {
  fetch(`${window.mockApiUrl}${id}`, {
    method: "delete",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  }).then(() => {
    window.location.reload();
  });
};

window.openPetDetail = (id) => {
  
  fetch(`${window.mockApiUrl}${id}`, {
    method: "GET",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json()).then((res) => {
   
    let modalEl = document.getElementById('Modal');
    let petModal = new bootstrap.Modal(modalEl);
    modalEl.querySelector('#modalLabel').innerText  = res.name + "-"+ res.description ;
    modalEl.querySelector('.modal-body').innerHTML = `<img class="" src="${res.image}"/>`;
    petModal.show();
  })
};


let Modal = `<div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;


let newModal = document.createElement("div");
newModal.innerHTML = Modal;
document.body.appendChild(newModal);