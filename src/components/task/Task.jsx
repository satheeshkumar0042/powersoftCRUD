import React, { useState } from 'react';

const Task = () => {
  const [employeData, setEmployeData] = useState([
    { id: 1, title: 'WebApp', description: 'Creating a web app', Employe: 'satheesh' },
    { id: 2, title: 'MobApp', description: 'Creating a mobile app', Employe: 'dinesh' },
    { id: 3, title: 'Tracker', description: 'Tracking system', Employe: 'vasu' },
    { id: 4, title: 'BMI Calculator', description: 'Health project', Employe: 'rajesh' },
    { id: 5, title: 'Shoe Shop', description: 'E-commerce site', Employe: 'divya' },
    { id: 6, title: 'TechVoice', description: 'Tech blog', Employe: 'sarath' },
    { id: 7, title: 'Mobile App', description: 'Flutter based app', Employe: 'logesh' },
    { id: 8, title: 'Web Platform', description: 'Fullstack project', Employe: 'kumar' },
  ]);

  const [editId, setEditId] = useState(null);
  const [editedUser, setEditedUser] = useState({ title: '', description: '', Employe: '' });

  const [newTask, setNewTask] = useState({ title: '', description: '', Employe: '' });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployeData(employeData.filter((user) => user.id !== id));
    }
  };

  const handleEditClick = (user) => {
    setEditId(user.id);
    setEditedUser({
      title: user.title,
      description: user.description,
      Employe: user.Employe,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (id) => {
    const updated = employeData.map((user) =>
      user.id === id ? { ...user, ...editedUser } : user
    );
    setEmployeData(updated);
    setEditId(null);
  };

  const handleCancel = () => {
    setEditId(null);
  };

  const handleNewTaskChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreate = () => {
    if (!newTask.title || !newTask.description || !newTask.Employe) {
      alert("Please fill out all fields");
      return;
    }

    const newEntry = {
      ...newTask,
      id: employeData.length + 1
    };

    setEmployeData((prev) => [...prev, newEntry]);
    setNewTask({ title: '', description: '', Employe: '' });
  };

  return (
    <div className="container py-4">

        <div className="card p-3 mb-4">
        <h5 className="mb-3">Create New Task</h5>
        <div className="row g-2">
          <div className="col-sm-4">
            <input
              type="text"
              name="title"
              value={newTask.title}
              onChange={handleNewTaskChange}
              placeholder="Task Title"
              className="form-control"
            />
          </div>
          <div className="col-sm-4">
            <input
              type="text"
              name="description"
              value={newTask.description}
              onChange={handleNewTaskChange}
              placeholder="Task Description"
              className="form-control"
            />
          </div>
          <div className="col-sm-4">
            <input
              type="text"
              name="Employe"
              value={newTask.Employe}
              onChange={handleNewTaskChange}
              placeholder="Employee Name"
              className="form-control"
            />
          </div>
        </div>
        <div className="mt-3 text-end">
          <button className="btn btn-primary" onClick={handleCreate}>
            Add Task
          </button>
        </div>
      </div>

      {/* Task Cards */}
      <div className="row g-4">
        {employeData.map((user) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={user.id}>
            <div className="card shadow-sm h-100 p-3">
              {editId === user.id ? (
                <>
                  <input
                    type="text"
                    name="title"
                    value={editedUser.title}
                    onChange={handleInputChange}
                    className="form-control mb-2"
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    name="description"
                    value={editedUser.description}
                    onChange={handleInputChange}
                    className="form-control mb-2"
                    placeholder="Description"
                  />
                  <input
                    type="text"
                    name="Employe"
                    value={editedUser.Employe}
                    onChange={handleInputChange}
                    className="form-control mb-2"
                    placeholder="Employe"
                  />
                </>
              ) : (
                <>
                  <h5 className="mb-1">{user.title}</h5>
                  <p className="mb-1 text-muted">{user.description}</p>
                  <p className="mb-2">
                    <strong>Employe:</strong> {user.Employe}
                  </p>
                </>
              )}

              <div className="d-flex justify-content-between mt-auto">
                {editId === user.id ? (
                  <>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => handleSave(user.id)}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={() => handleEditClick(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
