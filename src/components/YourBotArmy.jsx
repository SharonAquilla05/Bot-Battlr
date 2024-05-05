import React from 'react'
import "./button.css"
function YourBotArmy({botArray,setBotArray}) {
    
function handleRemoveFromList(botid){
const remove = botArray.filter(bot =>bot.id !==botid)
setBotArray(remove)
alert ('Until we meet again ')
}    
function removeCompletely(botsid){
fetch( ` https://botis.onrender.com/bots${botsid}`,{
    method: 'DELETE'
})
.then(()=>{
  const destroy = botArray.filter(bot =>bot.id !==botsid)  
  setBotArray(destroy)
  alert(`Am  out goodbye soliders  🏳️`)
})

    
}    
const display = botArray.map((input)=>(
   <div key={input.id}>
   <p>Name:{input.name}</p>
   <p>Health:{input.health}</p>
   <p>Damage:{input.damage}</p>
   <p>Armor:{input.armor}</p>
   <p>Bot Class:{input.bot_class}</p>
    <img src={input.avatar_url} alt="try again" />
    <button onClick={()=>handleRemoveFromList(input.id)}>remove army from list</button>
    <button onClick={()=>removeCompletely(input.id)}id='red'>x</button>
    </div>
))
  return (
    <div>
        <h3>Here is my Ultimate Team</h3>
        {display}
    </div>
  )
}

export default YourBotArmy