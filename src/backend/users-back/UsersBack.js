import UsersBackForm from "./users-back-form/UsersBackForm";
import UsersBackList from "./users-back-list/UsersBackList";

function UsersBack() {
    return (

        <>
            <section>
                <header>
                    <h1>
                        Usuarios Servidor
                    </h1>
                </header>

                <UsersBackForm />
                <UsersBackList />
            </section>
        </>
    );
}

export default UsersBack;