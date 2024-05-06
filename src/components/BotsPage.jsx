import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import './App.css';

function BotsPage() {

  return (
    <div className="Main-page">
      <YourBotArmy />
      <BotCollection />
    </div>
  )
}

export default BotsPage;