const Charms = [
  {
    templateType: "Charm",
    cost: "1500",
    notes:
      "If items that causes life leech (e.g imbued with [[Vampirism]] imbuements) are equipped, this charm adds 4% to the amount of health points that is recovered on all dealt attacks.",
    effect:
      "Adiciona 4% [[Life Leech]] aos ataques se estiver usando equipamento que forneça life leech.",
    name: "Vampiric Embrace",
    implemented: "12.40.9997",
    type: "Passiva",
    status: "active",
  },
  {
    templateType: "Charm",
    cost: "600",
    notes:
      "'''Dodge''' is the best Defensiva Charm available, which is why it's usually the first one acquired by [[Knight]]s and some [[Paladin]]s (depending on their level and hunting style). Having this charm active on a strong creature during a hunt where there aren't many different creatures will considerably reduce the damage taken and hence increase the safety of the hunt, as well as the experience per hour since the players will be able to focus more on attacking and less on healing. \n\nThere are some important factors to take into account when choosing a creature to activate this charm on:\n\n* Overall damage taken during a hunt: When choosing a creature to bind this charm during a hunt, you should choose the one that deals most damage to you overall during the hunting session, which is not necessarily the strongest creature of the dungeon. For instance, even though [[Juggernaut]]s and [[Hellhound]]s are the strongest creatures in the [[Roshamuul Prison]], it would be better to use the charm in [[Demon Outcast]]s or [[Dark Torturer]]s instead since they are present in a much higher number. \n\n* Protection from Equipment and [[Imbuements]]: It's also important to note what other protections the player already has. For example, if a lot of [[Fire Damage]] protection is being used, it may be more efficient to use the charm on a creature that deals high damage of another element, e.g. [[Life Drain]]. \n\n* Number of abilities used by the creature: Even though this may be quite hard to evaluate, it may be the decisive point when in doubt about 2 creatures. Since the Charm has a 10% chance of triggering for each attack received, the higher the number of attacks taken, the most efficient the charm will be. Of course, this is completely dependent on the strength of these attacks, but it's something to keep in mind.",
    effect: "Desvia de um ataque com uma certa chance sem sofrer nenhum dano.",
    name: "Dodge",
    implemented: "11.50.6055",
    type: "Defensiva",
    status: "active",
  },
  {
    templateType: "Charm",
    cost: "900",
    notes:
      "The chance of this charm being triggered is 10% per attack done. Since the elemental damage charms are applied on top of the creature's elemental resistances, the Curse charm is recommended for [[Death Damage/Weak|creatures that are weak to Death Damage]]. As with the other elemental damage charms, it's most efficient when used on creatures that have a high amount of hitpoints.\n\nElemental damage Charms are the best ones available for [[Druid]]s and [[Sorcerer]]s and should be the first one unlocked by these vocations. They are also very good for [[Paladin]]s depending on the hunt and creatures. Even though [[Knight]]s will usually give preference to Defensiva Charms, at some point the Knight may wish to switch to Ofensiva charms to maximize its damage output. \n\nThe choice between the 6 elemental damage charms depends mostly on the creatures the player has unlocked in the bestiary and the creatures usually hunted. Since not many creatures are weak to [[Death Damage]] and those who are usually have some other elemental weakness, as well as the fact that Curse is a rather expensive Charm, it's usually not preferred by players.",
    effect:
      "Ativa uma criatura com uma certa chance e causa 5% de seus pontos de vida iniciais como [[Dano de Morte]] uma vez.",
    name: "Curse",
    implemented: "11.50.6055",
    type: "Ofensiva",
    actualname: "Curse",
    status: "active",
  },
  {
    templateType: "Charm",
    cost: "800",
    notes:
      "By activating this Charm on a creature your chances of looting the [[Creature Products]] the creature drops are increased by 20%. Because the bonus is not very high it's debatable whether this Charm is worth its price or not. Even if the objective is to loot some expensive Creature Products dropped by weak creatures (that wouldn't require any other charm), it is probably still more beneficial to simply hunt something else that drops good loot instead using the Ofensiva or Defensiva charms. Therefore, it's not recommended to buy this charm unless you have already obtained the most useful Ofensiva and Defensiva ones.",
    effect: "Estripar a criatura rende 20% a mais de produtos de criatura.",
    name: "Gut",
    implemented: "11.50.6055",
    history:
      "With the [[Summer Update 2020]], this charm effect was changed from 10% to 20% and its cost was decreased from 2000 to 800 charm points.",
    type: "Passiva",
    status: "active",
  },
  {
    templateType: "Charm",
    cost: "800",
    notes:
      "The chance of this charm being triggered is 10% per attack done. Since the elemental damage charms are applied on top of the creature's elemental resistances, the Zap charm is recommended for [[Energy Damage/Weak|creatures that are weak to Energy Damage]]. As with the other elemental damage charms, it's most efficient when used on creatures that have a high amount of hitpoints.\n\nElemental damage Charms are the best ones available for [[Druid]]s and [[Sorcerer]]s and should be the first one unlocked by these vocations. They are also very good for [[Paladin]]s depending on the hunt and creatures. Even though [[Knight]]s will usually give preference to Defensiva Charms, at some point the Knight may wish to switch to Ofensiva charms to maximize its damage output. \n\nThe choice between the 6 elemental damage charms depends mostly on the creatures the player has unlocked in the [[Bestiary]] and the creatures usually hunted. Since [[Energy Damage]] is useful against many strong creatures, it's usually among the first few unlocked.",
    effect:
      "Ativa uma criatura com uma certa chance e causa 5% de seus pontos de vida iniciais como [[Dano de Energia]] uma vez.",
    name: "Zap",
    implemented: "11.50.6055",
    type: "Ofensiva",
    status: "active",
  },
  {
    templateType: "Charm",
    cost: "600",
    notes:
      "The chance of this charm being triggered is 10% per attack done. Since the elemental damage charms are applied on top of the creature's elemental resistances, the Wound charm is recommended for [[Physical Damage/Weak|creatures that are weak to Physical Damage]]. As with the other elemental damage charms, it's most efficient when used on creatures that have a high amount of hitpoints.\n\nElemental damage Charms are the best ones available for [[Druid]]s and [[Sorcerer]]s and should be the first one unlocked by these vocations. They are also very good for [[Paladin]]s depending on the hunt and creatures. Even though [[Knight]]s will usually give preference to Defensiva Charms, at some point the Knight may wish to switch to Ofensiva charms to maximize its damage output. \n\nThe choice between the 6 elemental damage charms depends mostly on the creatures the player has unlocked in the [[Bestiary]] and the creatures usually hunted. Since [[Physical Damage]] is useful against most creatures and Wound is a cheap Charm, it's usually among the first few unlocked.",
    effect:
      "Ativa uma criatura com uma certa chance e causa 5% de seus pontos de vida iniciais como [[Dano Físico]] uma vez.",
    name: "Wound",
    implemented: "11.50.6055",
    type: "Ofensiva",
    status: "active",
  },
  {
    templateType: "Charm",
    cost: "800",
    notes:
      "Probably the last Charm every player should ever worry about, Bless is a Charm for pessimists. Any other Ofensiva or Defensiva charm is preferable since it will help you stay alive instead of slightly alleviating the [[Death Penalty]], which you should actually do everything to avoid completely. Furthermore, it's important to note that its effect will only be triggered if the final hit is dealt by the creature you have selected for the charm. This means that, even if you die with this charm on, it may not help you at all since most hunting grounds have multiple creatures in them.",
    effect:
      "Abençoa você e reduz a perda de habilidade e xp em 10% quando morto pela criatura escolhida.",
    name: "Bless",
    implemented: "11.50.6055",
    history:
      "With the [[Summer Update 2020]], this charm effect was changed from 3% to 10% and its cost was decreased from 2000 to 800 charm points..",
    type: "Passiva",
    status: "active",
  },
  {
    templateType: "Charm",
    cost: "1500",
    notes:
      "The chance of this charm being triggered is 10% per attack done. Since the elemental damage charms are applied on top of the creature's elemental resistances, the Divine Wrath charm is recommended for [[Holy Damage/Weak|creatures that are weak to Holy Damage]]. As with the other elemental damage charms, it's most efficient when used on creatures that have a high amount of hitpoints.\n\nElemental damage Charms are the best ones available for [[Druid]]s and [[Sorcerer]]s and should be the first unlocked by these vocations. They are also very good for [[Paladin]]s depending on the hunt and creatures. Even though [[Knight]]s will usually give preference to Defensiva Charms, at some point the Knight may wish to switch to Ofensiva charms to maximize its damage output.\n\nThe choice between the 7 elemental damage charms depends mostly on the creatures the player has unlocked in the [[Bestiary]] and the creatures usually hunted.",
    effect:
      "Ative uma certa criatura e cause 5% de seus pontos de vida iniciais como [[Dano Sagrado]] uma vez.",
    name: "Divine Wrath",
    implemented: "12.40.9997",
    type: "Ofensiva",
    status: "active",
  },
  {
    templateType: "Charm",
    cost: "700",
    notes:
      "The chance of this charm being triggered is 10% per attack received. Cleanse will remove one existing negative condition the character has when it's triggered, regardless if the condition was applied by the creature on which the charm is activated or not. If the character has more than one negative condition, the selection will be random. For example, if you are [[Burning]] (from a [[Dragon Lord]]'s attack or from an environment [[Fire Field]]), you can remove this condition by being attacked by a [[Demon Skeleton]], as long as you have Cleanse activated on it. The following [[Status Condition]]s can be removed with Cleanse:\n\n* [[File:Poisoned Icon.gif]] [[Poisoned]]\n* [[File:Burning Icon.gif]] [[Burning]]\n* [[File:Electrified Icon.gif]] [[Electrified]]\n* [[File:Freezing Icon.gif]] [[Freezing]]\n* [[File:Cursed Icon.gif]] [[Cursed]]\n* [[File:Dazzled Icon.gif]] [[Dazzled]]\n* [[File:Bleed Icon.gif]] [[Bleeding]]\n* [[File:Slowed Icon.gif]] [[Slowed]]\n\nPlease note that '''skill debuffs cannot be removed with Cleanse'''. \n\nWhile Cleanse's utility in [[PvE]] is debatable since the negative conditions it removes are not very harmful and a different Defensiva or even Ofensiva charm would probably be more helpful, this charm does have some utility in [[PvP]]. It's often used to remove a condition for which the character does not have a cleansing spell, allowing for a faster removal of a [[Protection Zone Block]] and [[Paralysis]]. For example, it's common for PvP players to have this charm active in one of the creatures found around [[Roshamuul]], since this is a recurring fighting area.",
    effect:
      "Limpa você por dentro com uma certa chance depois de ser atingido e remove um negativo ativo aleatório [[Condição de status|efeito de status]] e temporariamente o torna imune a ele.",
    name: "Cleanse",
    implemented: "11.50.6055",
    type: "Defensiva",
    status: "active",
  },
  {
    templateType: "Charm",
    cost: "800",
    notes:
      "This charm adds 25% to the chance of having success when [[skinning]] or [[dusting]] corpses of the skinnable/dustable creature this charm is assigned to. For example, if the success chance is originally 5%, it becomes 30% after assigning the charm.\n\nDue to the fact that nowadays most Dusts and Leathers are not very expensive, this charm is hardly worth unlocking and activating. You will most likely save more money by using Defensiva or Ofensiva charms, for example, that could be used to buy the desired creature products. The fact that is one of the most expensive Charms and not many creatures can be skinned/dusted is also a disadvantage of Scavenge.",
    effect:
      "Aumenta suas chances de esfolar/esfolar com sucesso uma criatura que pode ser esfolada/despojada.",
    name: "Scavenge",
    implemented: "11.50.6055",
    history:
      "Since [[Updates/11.70.6521|Update 11.70]], this charm's effect also applies to [[dusting]].<br />\nWith the [[Updates/12.40.9997|Summer Update 2020]], this charm effect was changed from 10% to 25% and its cost was decreased from 1500 to 800 charm points.",
    type: "Passiva",
    status: "active",
  },
  {
    templateType: "Charm",
    cost: "500",
    notes:
      "While the speed boost of Adrenaline Burst is considerable - it multiplies character speed by 2.5 -, its unpredictability makes it hard to be used very efficiently, as you should always be prepared to run around with your regular speed and shouldn't depend on it to keep your distance or run away from creatures. Also, since this bonus removes and is removed by haste spells, it won't stack with other temporary bonuses, reducing its usefulness. \n\nOverall, it's not worth unlocking this charm before the other Ofensiva and Defensiva charms. Given its low cost, however, it may be interesting in certain situations that could lead to funny unusual hunting moments.",
    effect:
      "Explosões de adrenalina aumentam seus reflexos com uma certa chance depois de ser atingido e permitem que você se mova mais rápido por 10 segundos.",
    name: "Adrenaline Burst",
    implemented: "11.50.6055",
    type: "Defensiva",
    status: "active",
  },
  {
    templateType: "Charm",
    cost: "500",
    notes:
      "This affects creatures even if they are immune to the [[Paralyse Rune]].<br />\nThis is the only Ofensiva charm that is not affected by [[Charm Upgrade]].",
    effect:
      "Aleija a criatura com uma certa chance e [[paralisia|paralisa]] por 10 segundos.",
    name: "Cripple",
    implemented: "11.50.6055",
    type: "Ofensiva",
    status: "active",
  },
  {
    templateType: "Charm",
    cost: "1000",
    notes:
      "The chance of this charm being triggered is 10% per attack done. Since the elemental damage charms are applied on top of the creature's elemental resistances, the Enflame charm is recommended for [[Fire Damage/Weak|creatures that are weak to Fire Damage]]. As with the other elemental damage charms, it's most efficient when used on creatures that have a high amount of hitpoints.\n\nElemental damage Charms are the best ones available for [[Druid]]s and [[Sorcerer]]s and should be the first one unlocked by these vocations. They are also very good for [[Paladin]]s depending on the hunt and creatures. Even though [[Knight]]s will usually give preference to Defensiva Charms, at some point the Knight may wish to switch to Ofensiva charms to maximize its damage output. \n\nThe choice between the 6 elemental damage charms depends mostly on the creatures the player has unlocked in the [[Bestiary]] and the creatures usually hunted. Since many creatures are strong to [[Fire Damage]] Enflame is usually not preferred by most players. Furthermore, it has a high costs in Charm Points, making the other Ofensiva Charms even more advantageous.",
    effect:
      "Ativa uma criatura com uma certa chance e causa 5% de seus pontos de vida iniciais como [[Dano de Fogo]] uma vez.",
    name: "Enflame",
    implemented: "11.50.6055",
    type: "Ofensiva",
    status: "active",
  },
  {
    templateType: "Charm",
    cost: "1500",
    notes:
      "If items that causes mana leech (e.g imbued with [[Void Imbuement]]s) are equipped, this charm adds 2% to the amount of mana points that is recovered on all dealt attacks.",
    effect:
      "Adiciona 2% [[Mana Leech]] aos ataques se estiver usando equipamento que fornece mana leech.",
    name: "Void's Call",
    implemented: "12.40.9997",
    type: "Passiva",
    status: "active",
  },
  {
    templateType: "Charm",
    cost: "500",
    notes:
      "This affects creatures even if they are immune to the [[Paralyse Rune]].",
    effect:
      "Entorpece a criatura com uma certa chance após seu ataque e paralisa a criatura por 10 segundos.",
    name: "Numb",
    implemented: "11.50.6055",
    type: "Defensiva",
    status: "active",
  },
  {
    templateType: "Charm",
    cost: "600",
    notes:
      "The chance of this charm being triggered is 10% per attack done. Since the elemental damage charms are applied on top of the creature's elemental resistances, the Poison charm is recommended for [[Earth Damage/Weak|creatures that are weak to Earth Damage]]. As with the other elemental damage charms, it's most efficient when used on creatures that have a high amount of hitpoints.\n\nElemental damage Charms are the best ones available for [[Druid]]s and [[Sorcerer]]s and should be the first one unlocked by these vocations. They are also very good for [[Paladin]]s depending on the hunt and creatures. Even though [[Knight]]s will usually give preference to Defensiva Charms, at some point the Knight may wish to switch to Ofensiva charms to maximize its damage output. \n\nThe choice between the 6 elemental damage charms depends mostly on the creatures the player has unlocked in the [[Bestiary]] and the creatures usually hunted. Even though not many strong creatures are weak against [[Earth Damage]], it's an exceptional Charm when used on some important high level spawns, which is why it's usually unlocked by players that hunt these spawns frequently.",
    effect:
      "Ativa uma criatura com uma certa chance e causa 5% de seus pontos de vida iniciais como [[Earth Damage]] uma vez.",
    name: "Poison",
    implemented: "11.50.6055",
    type: "Ofensiva",
    status: "active",
  },
  {
    templateType: "Charm",
    cost: "1000",
    notes:
      "Even though Parry is categorized as a Defensiva Charm (because it's triggered when the character is attacked), its effect is actually Ofensiva since it will deal damage. The damage dealt by this charm has no element, meaning it's neutral and will damage the creature regardless of its resistances, which is very important since most creatures are strong or immune to the elements they use to attack. It will, however, be affected by the creature's armor. Furthermore, the damage value is the base damage calculated before the player's resistances, which means that the equipment and imbuements used by the character will not affect the damage taken by the creature.\n\nParry is often unlocked by [[Knight]]s since this vocation will inevitably take a lot of damage. It's also very useful for higher level [[Paladin]]s that hunt blocking the creatures around themselves. It's not really recommended for [[Druid]]s and [[Sorcerer]]s since these players should try to avoid taking as much damage as possible and will benefit a lot more from the Ofensiva elemental damage charms. Regardless of the vocation, however, parry is more effective on creatures that deal high damage but have relatively low health, which makes the elemental charms less effective on them.",
    effect:
      "Qualquer dano recebido é refletido no agressor com uma certa chance.",
    name: "Parry",
    implemented: "11.50.6055",
    type: "Defensiva",
    status: "active",
  },
  {
    templateType: "Charm",
    cost: "800",
    notes:
      "The chance of this charm being triggered is 10% per attack done. Since the elemental damage charms are applied on top of the creature's elemental resistances, the Freeze charm is recommended for [[Ice Damage/Weak|creatures that are weak to Ice Damage]]. As with the other elemental damage charms, it's most efficient when used on creatures that have a high amount of hitpoints.\n\nElemental damage Charms are the best ones available for [[Druid]]s and [[Sorcerer]]s and should be the first one unlocked by these vocations. They are also very good for [[Paladin]]s depending on the hunt and creatures. Even though [[Knight]]s will usually give preference to Defensiva Charms, at some point the Knight may wish to switch to Ofensiva charms to maximize its damage output. \n\nThe choice between the 6 elemental damage charms depends mostly on the creatures the player has unlocked in the [[Bestiary]] and the creatures usually hunted. Since [[Ice Damage]] is useful against many strong creatures, it's usually among the first few unlocked.",
    effect:
      "Ativa uma criatura com uma certa chance e causa 5% de seus pontos de vida iniciais como [[Dano de Gelo]] uma vez.",
    name: "Freeze",
    implemented: "11.50.6055",
    type: "Ofensiva",
    status: "active",
  },
  {
    templateType: "Charm",
    cost: "2000",
    notes:
      "If a critical hit is dealt due to this additional 8%, every charm creature affected by the attack will receive critical damage.\n<!-- Commenting out previous notes due to the charm's changes.\nLow Blow's most important note is that it will only be triggered for the creature you have selected it for, even if you are using area attacks, unlike the critical damage from weapons which is based on the attack itself, not on the creatures. \n\nThis Charm may look like an interesting Ofensiva option, but it will be worse than the elemental damage Charms on most cases. Since the elemental damage charms are based on the creature's total hitpoints, the stronger the creature, the most effective those charms will be. Low Blow, on the other hand, will have the same effect regardless of the creature it's active on, because it is only dependent on the damage dealt by the player.\n\nWhile it's possible that the overall damage increase from Low Blow can be higher than that from other Ofensiva charms for some medium strength creatures, in the long therm this charm is not worth its high cost unless you have the Charm Points to spare. On weak creatures with a low amount of hitpoints (when you most likely wouldn't activate a Charm anyway), there's a good chance that the creature will die in a couple of hits and the increased damage wouldn't be noticeable. -->",
    effect:
      "Adiciona 8% de chance de acerto crítico para ataques com armas [[Acertos Críticos|acerto crítico]].",
    name: "Low Blow",
    implemented: "11.50.6055",
    history:
      "On {{OfficialNewsArchive|5268|November 05, 2019}}, the charm was changed. Its old description was ''Adds 3% critical hit chance to attacks with [[Critical Hits|critical hit]] weapons.'', and it did not affect all creatures of the same type when the charm was triggered. This change, however, was due to the fact that the charm was previously bugged (or its description had a typo) and providing a much higher bonus (13%) than the expected.",
    type: "Passiva",
    status: "active",
  },
];

export default Charms;
