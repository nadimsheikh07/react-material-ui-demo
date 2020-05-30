import React from 'react';
import MaterialUICollapseMenu from '../component/mainMenu'

const items = [
    {
        "id": 1,
        "title": "",
        "items": [
            {
                "id": "dashboard",
                "icon": "dashboard",
                "name": "Dashboard",
                "link": "/dashboard"
            }
        ]
    },
    {
        "id": 2,
        "title": "",
        "items": [
            {
                "id": "user-module",
                "icon": "group",
                "name": "User Module",
                "subitems": [
                    {
                        "id": "permissions",
                        "icon": "person",
                        "name": "Permission List",
                        "link": "/permissions"
                    },
                    {
                        "id": "roles",
                        "icon": "person",
                        "name": "Role List",
                        "link": "/roles"
                    },
                    {
                        "id": "users",
                        "icon": "person",
                        "name": "User List",
                        "link": "/users"
                    },
                ]
            }
        ]
    },
    {
        "id": 3,
        "title": "",
        "items": [
            {
                "id": "task-module",
                "icon": "recent_actors",
                "name": "Task Module",
                "subitems": [
                    {
                        "id": "tasks",
                        "icon": "recent_actors",
                        "name": "Task List",
                        "link": "/tasks"
                    },
                    {
                        "id": "task-calender",
                        "icon": "recent_actors",
                        "name": "Task Calender",
                        "link": "/task-calender"
                    },
                ]
            }
        ]
    }
]

class MainMenu extends React.Component {

    render() {
        return (
            <React.Fragment>
                <MaterialUICollapseMenu items={items} />
            </React.Fragment>
        )

    }
}

export default MainMenu;