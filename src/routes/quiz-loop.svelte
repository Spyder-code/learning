<script>
  import { goto } from '@roxi/routify';

  let q = parseInt(Math.random() * (168 - 56) + 56);
  let is_next = false;
  let no = 1;
  let i = 1;
  let n = 2;
  let op = '<';

  const sum = ()=> {
    no = 0;
    if(op=='>'){
      for (let j = i; j > n; j++) {
        no++;
      }
    }
    if(op=='>='){
      for (let j = i; j >= n; j++) {
        no++;
      }
    }
    if(op=='<'){
      for (let j = i; j < n; j++) {
        no++;
      }
    }
    if(op=='<='){
      for (let j = i; j <= n; j++) {
        no++;
      }
    }
  }
  const next = ()=>{
    is_next = true;
    setTimeout(() => {
      $goto('/thanks');
    }, 1000);
  }
  const prev = ()=>{
    is_next = true;
    setTimeout(() => {
      $goto('/loop');
    }, 1000);
  }
  const changeOp = (name) =>{
    op = name;
    sum();
  }

  let text = 
`   for (let i = ${i}; i ${op} ${n}; i++) {
        createBox();
    }`;

$: text = 
`   for (let i = ${i}; i ${op} ${n}; i++) {
        createBox();
    }`;
</script>

<div class="container-fluid animate__animated animate__bounceInLeft {is_next?'animate__animated animate__bounceOut':''}">
  <div class="card">
    <span class="card-title">Quiz</span>
    <div class="flex-row">
      <div class="w-15">
        <p>Let's go create {q} box with loop</p>
        <div class="input">
          <label>Variable i:</label>
          <input type="number" bind:value={i} min="0" on:change={sum} on:keyup={sum}>
        </div>
        <div class="input">
          <label>Operation:</label>
          <div class="flex-row">
            <button class="op" on:click={()=>changeOp('>')}>{'>'}</button>
            <button class="op" on:click={()=>changeOp('>=')}>{'>='}</button>
            <button class="op" on:click={()=>changeOp('<')}>{'<'}</button>
            <button class="op" on:click={()=>changeOp('<=')}>{'<='}</button>
          </div>
        </div>
        <div class="input">
          <label>Variable n:</label>
          <input type="number" bind:value={n} min="0" on:change={sum} on:keyup={sum}>
        </div>
      </div>
      <div class="w-85">
        <div class="card-box">
          <div class="flex-row wrap">
            {#each Array(no) as item,idx}
              <div class="box animate__animated animate__bounceInLeft">{idx+1}</div>
            {/each}
          </div>
          <hr>
          <div class="flex-row">
            <div class="w-50">
              <pre>{text}</pre>
            </div>
            {#if no==q}
              <div class="w-50">
                <span>Why using loop?</span>
                <oll>
                  <li>Make your code shorter</li>
                  <li>Easier to debug</li>
                  <li>Save your time</li>
                </oll>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
    {#if no==q}
    <button on:click={next} class="icon right animate__animated animate__bounce">
      <span class="mdi mdi-arrow-right-bold-circle-outline"></span>
    </button>
    {/if}
    <button on:click={prev} class="icon left animate__animated animate__bounce">
      <span class="mdi mdi-arrow-left-bold-circle-outline"></span>
    </button>
  </div>
</div>

<style>
  button.op{
    width: 50px;
    padding: 7px 0px;
  }
  .input{
    margin: 15px 0px;
  }
  input{
    text-align: center;
    padding: 5px 10px;
    outline: none;
  }
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
  .w-50{
    width: 50%;
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