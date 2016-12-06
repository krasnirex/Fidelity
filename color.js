//  changeColorOnClickDown.js
(
 function()
 { 
    var clicked = false;
    this.clickDownOnEntity = function(entityID, mouseEvent) 
    { 
        if (clicked)
        {
            Entities.editEntity(entityID, { color: { red: 0, green: 0, blue: 255} });
            Entities.editEntity(entityID, { gravity: { x: 0, y: 0, z: 9} });
            clicked = false;
        }
        else
        {
            Entities.editEntity(entityID, { color: { red: 0, green: 0, blue: 0} });
            Entities.editEntity(entityID, { gravity: { x: 0, y: 0, z: 0} });
            clicked = true; 
        }
    }; 
}
)
