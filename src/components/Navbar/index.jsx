import React from 'react'



function index() {
  return (
    <>
    <div className="about w-100 bg-success">
    <nav class="navbar navbar-expand-lg p-4 navbar-light bg-success">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">My todos</a>
    <button
    class="navbar-toggler"
    type="button"
    data-mdb-toggle="collapse"
    data-mdb-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup"
    aria-expanded="false"
    aria-label="Toggle navigation"
    >
    <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
    <a class="nav-link active" aria-current="page" href="#">To Do </a>
    <a class="nav-link" href="#">Count</a>
    <a class="nav-link" href="#">Photos</a>
    </div>
    </div>
    </div>
    </nav>
    </div>
    </>
    )
  }
  export default index
  