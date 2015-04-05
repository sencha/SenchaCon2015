/**
 * Simple "actioncolumn" using glyphs
 */
Ext.define('Ticket.grid.column.Glyph', {
    extend: 'Ext.grid.column.Column',
    xtype: 'glyphcolumn',

    /**
     * @cfg {Function/String} handler
     * A function called when the icon is clicked.
     * @cfg {Ext.view.Table} handler.view The owning TableView.
     * @cfg {Number} handler.rowIndex The row index clicked on.
     * @cfg {Number} handler.colIndex The column index clicked on.
     * @cfg {Object} handler.item The clicked item (or this Column if multiple {@link #cfg-items} were not configured).
     * @cfg {Event} handler.e The click event.
     * @cfg {Ext.data.Model} handler.record The Record underlying the clicked row.
     * @cfg {HTMLElement} handler.row The table row clicked upon.
     * @declarativeHandler
     */
    /**
     * @cfg {Object} scope
     * The scope (`this` reference) in which the `{@link #handler}`,
     * `{@link #getClass}`, `{@link #cfg-isDisabled}` and `{@link #getTip}` functions
     * are executed.
     * Defaults to this Column.
     */
    /**
     * @cfg {String} tooltip
     * A tooltip message to be displayed on hover. {@link Ext.tip.QuickTipManager#init Ext.tip.QuickTipManager} must
     * have been initialized.
     *
     * The tooltip may also be determined on a row by row basis by configuring a {@link #getTip} method.
     */
    /**
     * @cfg {Boolean} disabled
     * If true, the action will not respond to click events, and will be displayed semi-opaque.
     *
     * This Column may also be disabled on a row by row basis by configuring a {@link #cfg-isDisabled} method.
     */
    /**
     * @cfg {Boolean} [stopSelection=true]
     * Prevent grid selection upon click.
     * Beware that if you allow for the selection to happen then the selection model will steal focus from
     * any possible floating window (like a message box) raised in the handler. This will prevent closing the
     * window when pressing the Escape button since it will no longer contain a focused component.
     */
     stopSelection: true,
    /**
     * @cfg {Function} getClass
     * A function which returns the CSS class to apply to the icon image.
     * @cfg {Object} getClass.v The value of the column's configured field (if any).
     * @cfg {Object} getClass.metadata An object in which you may set the following attributes:
     * @cfg {String} getClass.metadata.css A CSS class name to add to the cell's TD element.
     * @cfg {String} getClass.metadata.attr An HTML attribute definition string to apply to the data container
     * element *within* the table cell (e.g. 'style="color:red;"').
     * @cfg {Ext.data.Model} getClass.r The Record providing the data.
     * @cfg {Number} getClass.rowIndex The row index.
     * @cfg {Number} getClass.colIndex The column index.
     * @cfg {Ext.data.Store} getClass.store The Store which is providing the data Model.
     */

    /**
     * @cfg {Function} isDisabled A function which determines whether the action item for any row is disabled and returns `true` or `false`.
     * @cfg {Ext.view.Table} isDisabled.view The owning TableView.
     * @cfg {Number} isDisabled.rowIndex The row index.
     * @cfg {Number} isDisabled.colIndex The column index.
     * @cfg {Object} isDisabled.item The clicked item (or this Column if multiple {@link #cfg-items} were not configured).
     * @cfg {Ext.data.Model} isDisabled.record The Record underlying the row.
     */

    /**
     * @cfg {Function} getTip A function which returns the tooltip string for any row.
     *
     * *Note*: Outside of an Ext.application() use of this config requires
     * {@link Ext.tip.QuickTipManager#init} to be called.
     *
     * @param {Object} value The value of the column's configured field (if any).
     * @param {Object} metadata An object in which you may set the following attributes:
     * @param {String} metadata.tdCls A CSS class name to add to the cell's TD element.
     *
     *     metadata.tdCls = "custom-cell-cls";
     *
     * @param {String} metadata.tdAttr An HTML attribute definition string to apply to
     * the data container element _within_ the table cell.
     *
     *     metadata.tdCls = tdAttr = "*";
     *     // * see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
     *     // be aware that setting cell attributes may override the cell layout
     *     // provided by the framework
     *
     * @param {String} metadata.tdStyle An inline style for the table cell
     *
     *     metadata.tdStyle = "background-color:red;";
     *
     * @param {Ext.data.Model} record The Record providing the data.
     * @param {Number} rowIndex The row index.
     * @param {Number} colIndex The column index.
     * @param {Ext.data.Store} store The Store which is providing the data Model.
     * @return {String} tip The tip text
     */

    /**
     * @cfg {Object[]} items
     * An Array which may contain multiple icon definitions, each element of which may contain:
     *
     * @cfg {String} items.icon The url of an image to display as the clickable element in the column.
     *
     * @cfg {String} items.iconCls A CSS class to apply to the icon image. To determine the class dynamically,
     * configure the item with a `getClass` function.
     *
     * @cfg {Function} items.getClass A function which returns the CSS class to apply to the icon image.
     * @cfg {Object} items.getClass.v The value of the column's configured field (if any).
     * @cfg {Object} items.getClass.metadata An object in which you may set the following attributes:
     * @cfg {String} items.getClass.metadata.css A CSS class name to add to the cell's TD element.
     * @cfg {String} items.getClass.metadata.attr An HTML attribute definition string to apply to the data
     * container element _within_ the table cell (e.g. 'style="color:red;"').
     * @cfg {Ext.data.Model} items.getClass.r The Record providing the data.
     * @cfg {Number} items.getClass.rowIndex The row index.
     * @cfg {Number} items.getClass.colIndex The column index.
     * @cfg {Ext.data.Store} items.getClass.store The Store which is providing the data Model.
     *
     * @cfg {Function} items.handler A function called when the icon is clicked.
     * @cfg {Ext.view.Table} items.handler.view The owning TableView.
     * @cfg {Number} items.handler.rowIndex The row index clicked on.
     * @cfg {Number} items.handler.colIndex The column index clicked on.
     * @cfg {Object} items.handler.item The clicked item (or this Column if multiple {@link #cfg-items} were not configured).
     * @cfg {Event} items.handler.e The click event.
     * @cfg {Ext.data.Model} items.handler.record The Record underlying the clicked row.
     * @cfg {HTMLElement} items.row The table row clicked upon.
     *
     * @cfg {Function} items.isDisabled A function which determines whether the action item for any row is disabled and returns `true` or `false`.
     * @cfg {Ext.view.Table} items.isDisabled.view The owning TableView.
     * @cfg {Number} items.isDisabled.rowIndex The row index.
     * @cfg {Number} items.isDisabled.colIndex The column index.
     * @cfg {Object} items.isDisabled.item The clicked item (or this Column if multiple {@link #cfg-items} were not configured).
     * @cfg {Ext.data.Model} items.isDisabled.record The Record underlying the row.
     *
     * @cfg {Function} items.getTip A function which returns the tooltip string for any row.
     * @cfg {Object} items.getTip.v The value of the column's configured field (if any).
     * @cfg {Object} items.getTip.metadata An object in which you may set the following attributes:
     * @cfg {String} items.getTip.metadata.css A CSS class name to add to the cell's TD element.
     * @cfg {String} items.getTip.metadata.attr An HTML attribute definition string to apply to the data
     * container element _within_ the table cell (e.g. 'style="color:red;"').
     * @cfg {Ext.data.Model} items.getTip.r The Record providing the data.
     * @cfg {Number} items.getTip.rowIndex The row index.
     * @cfg {Number} items.getTip.colIndex The column index.
     * @cfg {Ext.data.Store} items.getTip.store The Store which is providing the data Model.
     *
     * @cfg {Object} items.scope The scope (`this` reference) in which the `handler`, `getClass`, `isDisabled` and `getTip` functions
     * are executed. Fallback defaults are this Column's configured scope, then this Column.
     *
     * @cfg {String} items.tooltip A tooltip message to be displayed on hover.
     * {@link Ext.tip.QuickTipManager#init Ext.tip.QuickTipManager} must have been initialized.
     *
     * The tooltip may also be determined on a row by row basis by configuring a `getTip` method.
     *
     * @cfg {Boolean} items.disabled If true, the action will not respond to click events, and will be displayed semi-opaque.
     *
     * This item may also be disabled on a row by row basis by configuring an `isDisabled` method.
     */
    /**
     * @property {Array} items
     * An array of action items copied from the configured {@link #cfg-items items} configuration. Each will have
     * an `enable` and `disable` method added which will enable and disable the associated action, and
     * update the displayed icon accordingly.
     */

    actionIdRe: new RegExp(Ext.baseCSSPrefix + 'glyph-column-item(\\d+)'),

    /**
     * @cfg {String} altText
     * The alt text to use for the image element.
     */
    altText: '',

    /**
     * @cfg {String} [menuText=<i>Actions</i>]
     * Text to display in this column's menu item if no {@link #text} was specified as a header.
     */
    menuText: '<i>Actions</i>',

    sortable: false,

    glyphCls: 'fa',

    innerCls: Ext.baseCSSPrefix + 'grid-cell-inner-glyph-column',

    itemCls: Ext.baseCSSPrefix + 'glyph-column-item',

    itemTpl: [
        '<div tabIndex="0" role="{role}" ' +
            '<tpl if="alt">alt="{alt:htmlEncode}" </tpl>' +
            '<tpl if="tooltip">data-qtip="{tooltip:htmlEncode}" </tpl>' +
            'class="{glyphCls} {itemCls} {itemCls}{index} {[values.cls || " "]}' +
                '<tpl if="disabled"> ' + Ext.baseCSSPrefix + 'item-disabled</tpl>' +
        '"></div>'
    ],

    constructor: function(config) {
        var me = this,
            cfg = Ext.apply({}, config),
            // Items may be defined on the prototype
            items = cfg.items || me.items || [me],
            hasGetClass,
            i,
            len;

        me.origRenderer = cfg.renderer || me.renderer;
        me.origScope = cfg.scope || me.scope;

        me.renderer = me.scope = cfg.renderer = cfg.scope = null;

        // This is a Container. Delete the items config to be reinstated after construction.
        cfg.items = null;
        me.callParent([cfg]);

        // Items is an array property of ActionColumns
        me.items = items;

        for (i = 0, len = items.length; i < len; ++i) {
            if (items[i].getClass) {
                hasGetClass = true;
                break;
            }
        }

        // Also need to check for getClass, since it changes how the cell renders
        if (me.origRenderer || hasGetClass) {
            me.hasCustomRenderer = true;
        }
    },

    initComponent: function() {
        var me = this;
        me.callParent();
        if (me.sortable && !me.dataIndex) {
            me.sortable = false;
        }
    },

    // Renderer closure iterates through items creating an <img> element for each and tagging with an identifying
    // class name x-glyph-col-{n}
    defaultRenderer: function(v, cellValues, record, rowIdx, colIdx, store, view) {
        var me = this,
            scope = me.origScope,
            items = me.items,
            len = items.length,
            itemData = {
                itemCls: me.itemCls,
                glyphCls: me.glyphCls
            },
            ret = [],
            tpl = me.getTpl('itemTpl'),
            i, item, itemScope, disabled, tooltip;

        cellValues.tdCls += ' ' + Ext.baseCSSPrefix + 'glyph-column-cell';

        for (i = 0; i < len; i++) {
            item = items[i];

            itemScope = item.scope || scope;
            itemData.index = i;
            itemData.item = item;
            tooltip = null;

            if (Ext.isString(item)) {
                disabled = false;
                itemData.cls = item;
            } else {
                // Only process the item action setup once.
                if (!item.hasActionConfiguration) {
                    // Apply our documented default to all items
                    item.stopSelection = me.stopSelection;
                    item.disable = Ext.Function.bind(me.disableAction, me, [i], 0);
                    item.enable = Ext.Function.bind(me.enableAction, me, [i], 0);
                    item.hasActionConfiguration = true;
                }

                if (!(disabled = item.disabled)) {
                    if (item.isDisabled) {
                        disabled = Ext.callback(item.isDisabled, itemScope,
                                     [me, view, rowIdx, colIdx, item, record], 0, me);
                    }
                }

                if (!disabled && !(tooltip = item.tooltip)) {
                    if (item.getTip) {
                        tooltip = Ext.callback(item.getTip, itemScope, arguments, 0, me);
                    }
                }

                itemData.cls = item.iconCls || me.iconCls || ' ';
                if (item.getIconCls) {
                    itemData.cls = Ext.callback(item.getIconCls, itemScope, arguments, 0, me);
                }
            }

            itemData.alt = item.altText || me.altText;
            itemData.disabled = disabled;
            itemData.role = 'button';
            itemData.tooltip = tooltip;

            tpl.applyOut(itemData, ret);
        }

        return ret.join('');
    },

    updater: function(cell, value, record, view, dataSource) {
        var cellValues = {};

        Ext.fly(cell).addCls(cellValues.tdCls).down(this.getView().innerSelector, true).
            innerHTML = this.defaultRenderer(value, cellValues, record, null, null, dataSource, view);
    },

    /**
     * Enables this ActionColumn's action at the specified index.
     * @param {Number/Ext.grid.column.Action} index
     * @param {Boolean} [silent=false]
     */
    enableAction: function(index, silent) {
        var me = this;

        if (!index) {
            index = 0;
        } else if (!Ext.isNumber(index)) {
            index = Ext.Array.indexOf(me.items, index);
        }
        me.items[index].disabled = false;
        me.up('tablepanel').el.select('.' + Ext.baseCSSPrefix + 'glyph-column-item' + index).removeCls(me.disabledCls);
        if (!silent) {
            me.fireEvent('enable', me);
        }
    },

    /**
     * Disables this ActionColumn's action at the specified index.
     * @param {Number/Ext.grid.column.Action} index
     * @param {Boolean} [silent=false]
     */
    disableAction: function(index, silent) {
        var me = this;

        if (!index) {
            index = 0;
        } else if (!Ext.isNumber(index)) {
            index = Ext.Array.indexOf(me.items, index);
        }
        me.items[index].disabled = true;
        me.up('tablepanel').el.select('.' + Ext.baseCSSPrefix + 'glyph-col-' + index).addCls(me.disabledCls);
        if (!silent) {
            me.fireEvent('disable', me);
        }
    },

    beforeDestroy: function() {
        // Don't delete the items, if we're subclassed with items then we'll be
        // left with an items array.
        this.renderer = this.items = null;
        return this.callParent(arguments);
    },

    /**
     * @private
     * Process and re-fire events routed from the Ext.panel.Table's processEvent method.
     * Also fires any configured click handlers. By default, cancels the mousedown event to prevent selection.
     * Returns the event handler's status to allow canceling of GridView's bubbling process.
     */
    processEvent : function(type, view, cell, recordIndex, cellIndex, e, record, row){
        var me = this,
            target = e.getTarget(),
            key = type === 'keydown' && e.getKey(),
            match,
            item,
            disabled,
            cellFly = Ext.fly(cell);

        // Flag event to tell SelectionModel not to process it.
        e.stopSelection = !key && me.stopSelection;

        // If the target was not within a cell (ie it's a keydown event from the View), then
        // IF there's only one action icon, action it. If there is more than one, the user must
        // invoke actionable mode to navigate into the cell.
        if (key && (target === cell || !cellFly.contains(target))) {
            target = cellFly.query('.' + me.itemCls, true);
            if (target.length === 1) {
                target = target[0];
            } else {
                return;
            }
        }

        match = target && target.className.match(me.actionIdRe);
        if (match) {
            item = me.items[parseInt(match[1], 10)];

            if (!(disabled = item.disabled) && item.isDisabled) {
                disabled = Ext.callback(item.isDisabled, item.scope || me.origScope,
                                [view, recordIndex, cellIndex, item, record], 0, me);
            }

            if (item && !disabled) {
                // Do not allow focus to follow from this mousedown unless the grid is already in actionable mode
                if (type === 'mousedown' && !me.getView().actionableMode) {
                    e.preventDefault();
                }

                else if (type === 'click' || (key === e.ENTER || key === e.SPACE)) {
                    Ext.callback(item.handler || me.handler, item.scope || me.origScope,
                        [view, {
                            recordIndex: recordIndex,
                            cellIndex: cellIndex,
                            item: item,
                            event: e,
                            record: record,
                            row: row,
                            grid: view.grid,
                            view: view
                        }], 0, me);

                    // If the handler moved focus outside of the view, do not allow this event to propagate
                    // to cause any navigation.
                    if (!view.el.contains(Ext.Element.getActiveElement())) {
                        return false;
                    }
                }
            }
        }

        return me.callParent(arguments);
    },

    cascade: function(fn, scope) {
        fn.call(scope||this, this);
    },

    // Private override because this cannot function as a Container, and it has an items property which is an Array, NOT a MixedCollection.
    getRefItems: function() {
        return this._emptyArray;
    },

    privates: {
        _emptyArray: [],

        getFocusables: function() {
            // Override is here to prevent the default behaviour which tries to access
            // this.items.items, which will be null.
            return this._emptyArray;
        }
    }
});
