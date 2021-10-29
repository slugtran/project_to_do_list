<template>
  <div class="container">
    <div class="container1">
      <h1>MY TO-DO LIST</h1>
      <div class="forms">
        <input
          name="name"
          class="textName"
          type="text"
          placeholder="Name"
          autocomplete="name"
        />
        <button type="submit" class="btnSubmit">Add item</button>
      </div>
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action active">
          Cras justo odio
        </a>
        <i class="fa fa-pencil" aria-hidden="true"></i>

        <a href="#" class="list-group-item list-group-item-action"
          >Dapibus ac facilisis in</a
        >
        <i class="fab fa-accusoft"></i>

        <a href="#" class="list-group-item list-group-item-action"
          >Morbi leo risus</a
        >
        <a href="#" class="list-group-item list-group-item-action"
          >Porta ac consectetur ac</a
        >
        <a
          href="#"
          class="list-group-item list-group-item-action disabled"
          tabindex="-1"
          aria-disabled="true"
          >Vestibulum at eros</a
        >
      </div>
    </div>
    <div class="linker">Copyright @2019</div>
  </div>
</template>

<script></script>

<style scoped>
h1 {
  text-align: center;
}
.container {
  padding-top: 250px;
}
.container1 {
  background: rgb(247, 247, 228);
  padding: 25px 0 50px 0;
}
.btnSign {
  text-align: center;
  text-decoration: none;
}
.btnSignIn {
  margin-left: 0px;
  margin-top: 12px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: none #ffff;
  background: rgb(35, 105, 70);
  width: 100%;
}
.btnSignUp {
  margin-top: 12px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: none #ffff;
  width: 100%;
}
.linker {
  padding-top: 12px;
  text-align: center;
}
hr {
  width: 96%;
  text-align: center;
  border-bottom: 2px solid rgb(229, 233, 29);
  line-height: 0.1em;
  margin: 10px 0 20px;
  padding: 0 10px;
}
h1 {
  float: left;
}
.forms {
  float: right;
}
a {
    text-align: center;
    float: left;
    width: 60%;
}
i {
    text-align: center;
    float: right;
    width: 20%;
}
</style>
