<script>
  import { goto } from '@roxi/routify';

  let step = 0;
  let is_next = false;

  const next_step = ()=>{
    step++;
  }
  const next = ()=>{
    is_next = true;
    setTimeout(() => {
      $goto('/quiz-loop');
    }, 1000);
  }
  const prev = ()=>{
    is_next = true;
    setTimeout(() => {
      $goto('/event');
    }, 1000);
  }
  let text = 
`function washDishes(){
    prep();
    wash();
    rinse();
    dry();
}`
  let text_ = 
`   for (let i = 0; i < 200; i++) {
        washDishes();
    }`
</script>

<div class="container-fluid animate__animated animate__bounceInLeft {is_next?'animate__animated animate__bounceOut':''}">
  <div class="card">
    <span class="card-title">What is  Loop?</span>
    <div class="flex-row">
      <div class="w-15">
        <p>Let's go think about a task where you have to do the same thing multiple times</p>
      </div>
      <div class="w-85">
        <div class="card-box" on:click={next_step}>
          <div class="flex-row">
            <div class="w-60">
              {#if step>=1}
                <img class="cuci animate__animated animate__bounceInLeft" src="/cuci.png" alt="">
              {/if}
              {#if step>=2}
                <pre class="animate__animated animate__bounceInLeft">{text}</pre>
              {/if}
            </div>
            <div class="w-40">
              {#if step>=3}
              <div class="animate__animated animate__bounceInLeft">
                <h3>One Plate:</h3>
                <pre>  washDishes();</pre>
              </div>
              {/if}
              {#if step>=4}
                <div class="animate__animated animate__bounceInLeft">
                  <h3>Two Plates:</h3>
                  <pre>  washDishes();</pre>
                  <pre>  washDishes();</pre>
                </div>
              {/if}
              {#if step>=5}
                <div class="animate__animated animate__bounceInLeft">
                  <h3>Two hundred plate?</h3>
                </div>
              {/if}
              {#if step>=6}
                <div class="animate__animated animate__bounceInLeft">
                  <pre>{text_}</pre>
                </div>
              {/if}
            </div>
          </div>
          <!-- <div class="flex-row wrap">
            {#each Array(100) as item,idx}
              <div class="box animate__animated animate__bounceInLeft">{idx}</div>
            {/each}
          </div> -->
        </div>
      </div>
    </div>
    <button on:click={next} class="icon right animate__animated animate__bounce">
      <span class="mdi mdi-arrow-right-bold-circle-outline"></span>
    </button>
    <button on:click={prev} class="icon left animate__animated animate__bounce">
      <span class="mdi mdi-arrow-left-bold-circle-outline"></span>
    </button>
  </div>
</div>

<style>
  pre{
    font-size: 15pt;
  }
  .icon.left{
    bottom: -30px;
    left: -20px;
  }
  .icon.right{
    bottom: -30px;
    right: -20px;
  }
  button.icon{
    padding: 0px;
    background-color: #242424;
    border: none;
    color: white;
    position: absolute;
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
    width: 20px;
    height: 20px;
    font-size: 13pt;
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
  .w-40{
    width: 40%;
  }
  .w-85{
    width: 85%;
  }
  .w-60{
    width: 60%;
  }
  img{
    height: 300px;
  }
</style>