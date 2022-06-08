//-----------------------------------
// Imports
//-----------------------------------

import AbstractModel from "./abstract_model";

//-----------------------------------
// Class
//-----------------------------------

/**
 * Is the model used for the users data.
 */
class UserData extends AbstractModel
{

    // ---------- Constructors ----------

    /**
     * Is the constructor for the database when querrying data from it.
     * @param {string} index is the index of the user.
     * @param {Date} date_creation is the date at which the user created its account.
     * @param {string} pseudo is the pseudo of the user.
     * @param {string} first_name is the first name of the user.
     * @param {string} lastName is the last name of the user.
     * @param {string} mail is the mail of the user.
     */
    constructor (index, date_creation, 
                 pseudo, first_name, lastName,
                mail)
    {   
        super(index);
    
        this._date_creation = date_creation;
        this._pseudo = pseudo;
        this._first_name = first_name;
        this._lastName = lastName;
        this._mail = mail;
    }

    // ---------- Getters ----------

    /**
     * This is the method to get the date at which the user created its account.
     * @returns {Date} the subscription date of the user.
     */
    getDateCreation ( ) 
    {
        return this._date_creation;
    }

    /**
     * This is the method to get the pseudo of the user.
     * @returns {string} the pseudo of the user.
     */
    getPseudo ( ) 
    {
        return this._pseudo;
    }

    /**
     * This is the method to get the first name of the user.
     * @returns {string}
     */
    getFirstName ( ) 
    {
        return this._first_name;
    }
    
    /**
     * This is the method to get the last name of the user.
     * @returns {string}
     */
    getLastName ( ) 
    {
        return this._lastName;
    }

    /**
     * This is the method to get the mail of the user.
     * @returns {string}
     */
    getMail ( ) 
    {
        return this._mail;
    }
    
    // ---------- Setters ----------
    
    
    /**
     * This method allows to edit the pseudo of the user.
     * @param {string} pseudo_
     */
    setPseudo (pseudo_) 
    {
        this._pseudo = pseudo_;
        this.__invokeListeners__('pseudo', this._pseudo);
    }

    /**
     * This method allows to edit the mail of the user.
     * @param {string} mail_
     */
    setMail (mail_) 
    {
        this._mail = mail_;
        this.__invokeListeners__('mail', this._mail);
    }
}


//-----------------------------------
// Exports
//-----------------------------------

export default UserData;