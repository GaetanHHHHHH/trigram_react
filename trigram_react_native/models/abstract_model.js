//-----------------------------------
// Class
//-----------------------------------

/**
 * Is the common abstract class of models of the application.
 */
class AbstractModel 
{

    // ---------- Constructors ----------

    /**
     * Is the constructor of the abstract model.
     * @param {string} index_ is the index of the model.
     */
    constructor (index_)
    {

        if (this.constructor === AbstractModel)
        {
            throw new Error("AbstractModel is an Abstract class and it cannot be instantiated.");
        }

        this._index = index_;
        this._listeners = new Array();

    }

    // ---------- Methods ----------

    /**
     * This method allows to add a listener to listener list of the model.
     * @param {Function} listener_ is the method to callback when a field is edited.
     */
    addListener (listener_) 
    {

        if (listener_ == null) 
        {
            return;
        }

        if (listener_ in this.listener_)
        {
            return;
        }

        this._listeners.push(listener_);

    }

    /**
     * This method allows to remove a listener from the listener list of the model.
     * @param {Function} listener_ is the listener to remove from the listener list.
     */
    remListener (listener_) 
    {
        if (listener_ == null) 
        {
            return;
        }

        let listenerIndex = this._listeners.indexOf(listener_)
        if (listenerIndex >= 0)
        {
            this._listeners.slice(listenerIndex, 1)
        }

    }

    /**
     * This method allows to invoke the listeners with the data name of the value changed and the new value.
     * @param {string} dataName is the name of the value changed. 
     * @param {*} dataValue is the new value.
     */
    __invokeListeners__ (dataName, dataValue) 
    {
        
        for (listener in this._listeners)
        {
            listener(dataName, dataValue);
        }

    }

    // ---------- Getters ----------

    /**
     * This method is used to get the index of the model.
     * @returns {string} the index of the model.
     */
    getIndex ( )
    {
        return this._index;
    }

}

//-----------------------------------
// Exports
//-----------------------------------

export default AbstractModel;