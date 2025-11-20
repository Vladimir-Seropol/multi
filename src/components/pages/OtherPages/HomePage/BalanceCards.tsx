import React from "react";
import type { BalanceCardsProps } from "../../../../types/types";



export const BalanceCards: React.FC<BalanceCardsProps> = React.memo(({ cards }) => (
  <div className="flex justify-between mb-2 gap-2 max-h-[98px]">
    {cards.map((card, index) => (
      <div key={index} className="rounded-xl flex-1">
        <img
          src={card.image}
          alt={`${card.type} card`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
    <div className="rounded-xl ">
      <img
        src="/icons_other/Add_Card.png"
        alt="add card"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
));

BalanceCards.displayName = "BalanceCards";