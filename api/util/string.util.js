/**
 * String Utils 
 * There i created every 'string' validations.
 * This gonna be applied to every validations. 
 * @author Daniel M Corrales.
 * @version 1.0
 */
class StringUtil{

    constructor(){}

    isEmpty(text){
        if(text === undefined || text === null)
            return true;

        if(text.length == 0)
            return true;
        
        return false;
    }

}

module.exports = StringUtil;