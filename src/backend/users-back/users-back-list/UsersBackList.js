const { Component } = require("react");

class ListUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
        };
    }

    componentDidMount() {
        const storedUserList = localStorage.getItem("userList");
        if (storedUserList) {
            this.setState({ userList: JSON.parse(storedUserList) });
        }
    }

    handleDelete = (index) => {
        const userList = JSON.parse(localStorage.getItem("userList") || "[]");
        userList.splice(index, 1);
        localStorage.setItem("userList", JSON.stringify(userList));
        this.forceUpdate();
    };


    render() {
        const userList = JSON.parse(localStorage.getItem("userList") || "[]");

        return (
            <div>
                <h2>Lista de Usuarios</h2>
                <ul>
                    {userList.map((user, index) => (
                        <li key={index}>
                            <span>{user.name}</span>
                            <button onClick={() => this.handleDelete(index)}>Borrar</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ListUser;