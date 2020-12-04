export default function() {
    /**
     * Set default values for new actors' tokens
     */
    Hooks.on("preCreateActor", (createData) => {

        // Set wounds, advantage, and display name visibility
        if (!createData.token)
            mergeObject(createData, {
                "token.bar1": { "attribute": "status.wounds" }, // Default Bar 1 to Wounds
                //"token.bar2": { "attribute": "status.advantage" }, // Default Bar 2 to Advantage
                "token.displayName": CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER, // Default display name to be on owner hover
                "token.displayBars": CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER, // Default display bars to be on owner hover
                "token.disposition": CONST.TOKEN_DISPOSITIONS.NEUTRAL, // Default disposition to neutral
                "token.name": createData.name // Set token name to actor name
            })

        // Set custom default token
        if (!createData.img)
            createData.img = "systems/dsa5/tokens/unknown.png"

        // Default characters to HasVision = true and Link Data = true
        if (createData.type == "character") {
            createData.token.vision = true;
            createData.token.actorLink = true;
        }

    })


    // Treat the custom default token as a true default token
    // If you change the actor image from the default token, it will automatically set the same image to be the token image

    Hooks.on("preUpdateActor", (actor, updatedData) => {
        /*if (actor.data.token.img == "systems/dsa5/tokens/unknown.png" && updatedData.img) {
          updatedData["token.img"] = updatedData.img;
          actor.data.token.img = updatedData.img;
        }*/
        if (actor.data.isMage) {
            mergeObject(updatedData, {
                "token.bar2": { "attribute": "status.astralenergy" }
            });
        } else if (actor.data.isPriest) {
            mergeObject(updatedData, {
                "token.bar2": { "attribute": "status.karmaenergy" }
            });
        } else {
            mergeObject(updatedData, {
                "token.bar2": {}
            });
        }

    })

    /*Hooks.on("updateActor", (actor, updateData) => {
        if (actor.data.flags.autoCalcWounds) 
        {
          let wounds = actor._calculateWounds()
          if (actor.data.data.status.wounds.max != wounds) // If change detected, reassign max and current wounds
            actor.update({"data.status.wounds.max" : wounds, "data.status.wounds.value" : wounds});
        }
    })*/
}