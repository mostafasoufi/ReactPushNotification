/**
 * @jsx React.DOM
 *
 */

var PushNotification = React.createClass({
    displayName: 'Notif',

    getDefaultProps: function () {
        return {
            body: null,
            icon: null
        };
    },

    permission_request: function () {

        return new Notification(this.props.message, {
            body: this.props.body,
            icon: this.props.icon
        });
    },

    render: function () {
        return (
           <notification>
               {this.permission_request()}
           </notification>
        );
    }


});

function Notif(message, options) {


    var props, wrapper;

    if (options == null) {
        options = {};
    }

    props = $.extend({
        message: message
    }, options);

    wrapper = document.body.appendChild(document.createElement('div'));
    React.render(<PushNotification {...props} />, wrapper);


}
