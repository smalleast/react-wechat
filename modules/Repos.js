import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },

    handleSubmit(event) {
        event.preventDefault()
        console.log('userName:' + userName);
        console.log('repo:' + repo);
        const userName = event.target.elements[0].value
        const repo = event.target.elements[1].value
        const path = `/repos/${userName}/${repo}`
        console.log(this.context.router);
        this.context.router.push(path)
        console.log('userName:' + userName);
        console.log('repo:' + repo);
    },
    render() {
        return (
            <div>
                <h2>Repos</h2>
                <ul>
                    <li><Link to="/repos/reactjs/react-router">React Router</Link></li>
                    <li><Link to="/repos/facebook/react">React</Link></li>
                    <li>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="userName"/> / {' '}
                            <input type="text" placeholder="repo"/>{' '}
                            <button type="submit">Go</button>
                        </form>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})
