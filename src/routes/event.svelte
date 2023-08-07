<script>
  import Change from "../lib/Change.svelte";
  import Click from "../lib/Click.svelte";
  import MouseOut from "../lib/MouseOut.svelte";
  import MouseOver from "../lib/MouseOver.svelte";
  import { goto } from '@roxi/routify';

  let is_next = false;
  let tab = 'onchange';
  const next = ()=>{
    is_next = true;
    setTimeout(() => {
      $goto('/loop');
    }, 1000);
  }

  const changeTab = (name)=>{
    tab = name;
  }
</script>

<div class="container-fluid animate__animated animate__bounceInLeft {is_next?'animate__animated animate__bounceOut':''}">
  <div class="card">
    <span class="card-title">What is  Event?</span>
    <div class="flex-row">
      <div class="w-15">
        <div class="flex">
          <button on:click={()=>changeTab('onchange')} class="box {tab=='onchange'?'active':''}">
            <i>onchange</i>
          </button>
          <button on:click={()=>changeTab('onclick')} class="box {tab=='onclick'?'active':''}">
            <i>onclick</i>
          </button>
          <button on:click={()=>changeTab('onmouseover')} class="box {tab=='onmouseover'?'active':''}">
            <i>onmouseover</i>
          </button>
          <button on:click={()=>changeTab('onmouseout')} class="box {tab=='onmouseout'?'active':''}">
            <i>onmouseout</i>
          </button>
        </div>
      </div>
      <div class="w-85">
        {#if tab=='onchange'}
          <Change/>
        {/if}
        {#if tab=='onclick'}
          <Click/>
        {/if}
        {#if tab=='onmouseover'}
          <MouseOver/>
        {/if}
        {#if tab=='onmouseout'}
          <MouseOut/>
        {/if}
      </div>
    </div>
    <button on:click={next} class="icon animate__animated animate__bounce">
      <span class="mdi mdi-arrow-right-bold-circle-outline"></span>
    </button>
  </div>
</div>

<style>
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
    background-color: #242424;
    border: none;
    color: cornflowerblue;
    cursor: pointer;
  }
  .card{
    margin:30px 0px;
    border: 2px solid cornflowerblue;
    border-radius: 20px;
    position: relative;
    top:50%;
  }
  .card-title{
    position: absolute;
    top: -20px;
    left: -10px;
    font-size: 20pt;
    background-color: #242424;
    padding: 0px 10px;
  }
  .box{
    text-align: center;
    border: 1px solid white;
    box-shadow: rgba(255, 255, 255, 0.707) 0px 5px 15px;
    padding: 10px;
    width: 130px;
    font-size: 13pt;
    background: transparent;
    color: white;
  }
  .small-box{
    margin-top: 15px;
    text-align: center;
    border: 1px solid white;
    box-shadow: rgba(255, 255, 255, 0.707) 0px 5px 15px;
    padding: 5px;
    font-size: .9rem;
  }
  .box.active{
    border: 1px solid cornflowerblue;
    box-shadow: rgba(55, 14, 218, 0.707) 0px 5px 15px;
  }
  .flex{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .wrap{
    flex-wrap: wrap;
  }
  .flex-row{
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .w-15{
    width: 15%;
  }
  .w-30{
    width: 30%;
  }
  .w-30{
    width: 30%;
  }
  .w-85{
    width: 85%;
  }
  .w-70{
    width: 70%;
  }
</style>