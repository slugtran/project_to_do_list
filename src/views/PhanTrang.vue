<template>
  <paginate
    v-model="page"
    :page-count="20"
    :page-range="3"
    :margin-pages="2"
    :click-handler="clickCallback"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'">
  </paginate>
</template>

<script>
export default {
  data() {
    return {
      page: 10
    }
  }
}
</script>
<!-- 
  <template>
  <div class="container">
<div class="container1">
<h1>MY TO-DO LIST</h1>
<div class="forms">
<input
name="name"
class="textName"
type="text"
placeholder="Enter to search..."
autocomplete="Enter to search..."
style="text-align: center"
/>
<button type="submit" class="btnSubmit">Add item</button>
</div>
<div class="groupTitle">
<div class="btn-group" role="group" aria-label="Basic example">
<button type="button" class="btnTitle">Title</button>
<button class="btnEdit">
<i class="fas fa-edit"></i>
</button>
<button class="btnDelete">
<i class="fas fa-trash-alt"></i>
</button>
</div>
<div class="btn-group" role="group" aria-label="Basic example">
<button type="button" class="btnTitle">Title</button>
<button class="btnEdit">
<i class="fas fa-edit"></i>
</button>
<button class="btnDelete">
<i class="fas fa-trash-alt"></i>
</button>
</div>
<div class="btn-group" role="group" aria-label="Basic example">
<button type="button" class="btnTitle">Title</button>
<button class="btnEdit">
<i class="fas fa-edit"></i>
</button>
<button class="btnDelete">
<i class="fas fa-trash-alt"></i>
</button>
</div>
<div class="btn-group" role="group" aria-label="Basic example">
<button type="button" class="btnTitle">Title</button>
<button class="btnEdit">
<i class="fas fa-edit"></i>
</button>
<button class="btnDelete">
<i class="fas fa-trash-alt"></i>
</button>
</div>
<div class="btn-group" role="group" aria-label="Basic example">
<button type="button" class="btnTitle">Title</button>
<button class="btnEdit">
<i class="fas fa-edit"></i>
</button>
<button class="btnDelete">
<i class="fas fa-trash-alt"></i>
</button>
</div>
</div>
</div>
</div> -->
<!-- </template>
<script>
export default {};
</script>
<style scoped>
h1 {
margin-left: 20px;
font-weight: 900;
}
.container1 {
background: white;
padding: 30px 0 50px 0;
width: 900px;
margin: auto;
height: 500px;
}
.container {
width: 100%;
height: 100vh;
overflow: hidden;
padding-top: 100px;
background-color: rgb(221, 233, 241);
}
.forms {
float: right;
margin-right: 20px;
margin-top: -30px;
}
.btnSubmit {
background-color: rgb(37, 201, 22);
margin-left: 20px;
width: 70px;
height: 25px;
}
.textName {
height: 30px;
width: 200px;
}
.btnTitle {
width: 90%;
text-align: left;
border: none;
background-color: white;
}
.btn-group {
width: 95%;
border: groove;
}
.btnEdit {
background-color: white;
border: none;
height: 30px;
}
.btnDelete {
background-color: white;
border: none;
}
.groupTitle {
margin-top: 20px;
width:100%;
margin-left:20px;
}
</style>
 -->