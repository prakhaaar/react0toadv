import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props);

        // state variables
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "default",
            },
        };
    }

    async componentDidMount() {
        // API call
        const data = await fetch("https://api.github.com/users/prakhaaar");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <section className="w-64 bg-slate-200 text-slate-700 m-4 p-2">
                <img src={avatar_url} className="rounded p-4" alt={name} />
                <h2 className="p-4 text-slate-500 font-bold">{name}</h2>
                <h3 className="p-4">{location}</h3> {/* fixed typo */}
            </section>
        );
    }
}

export default User;
