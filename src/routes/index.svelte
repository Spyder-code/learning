<script>
  import { goto } from '@roxi/routify';
  let is_play = false;

  const next = ()=>{
    is_play = true;
    setTimeout(() => {
      $goto('/event');
    }, 1000);
  }

</script>


<div class="container">
  <div class="card animate__animated animate__bounceInLeft {is_play?'animate__animated animate__bounceOut':''}">
    <span class="card-title">Lesson 1</span>
    <h1>EVENT AND LOOP IN CODING</h1>
    <button on:click={next} class="icon animate__animated animate__bounce">
      <span class="mdi mdi-play-circle"></span>
    </button>
  </div>
</div>

<style>
  .card{
    margin:30px 0px;
    border: 2px solid cornflowerblue;
    border-radius: 20px;
    text-align: center;
    position: relative;
    top:50%;
  }
  .card-title{
    position: absolute;
    top: -20px;
    left: -10px;
    font-size: 20pt;
    background-color: #242424;
  }
  button.icon{
    padding: 0px;
    background-color: #242424;
    border: none;
    color: white;
    position: absolute;
    bottom: -30px;
    right: -20px;
  }
  button.icon:hover{
    padding: 0px;
    background: transparent;
    border: none;
    color: cornflowerblue;
    cursor: pointer;
  }
</style>