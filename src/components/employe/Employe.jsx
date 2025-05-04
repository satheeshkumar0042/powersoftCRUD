import React, { useState } from 'react';
import Profile from "../../assets/profile1.png";
import Profile4 from "../../assets/profile4.png";
import Profile5 from "../../assets/profile5.png";
import Profile2 from "../../assets/profile2.png";
import Profile3 from "../../assets/profile3.png";
import Profile6 from "../../assets/profile6.png";

const Employe = () => {
  const [employeData, setEmployeData] = useState([
    { id: 1, name: 'Satheesh', position: 'Developer', email: 'satheesh@123', image: Profile },
    { id: 2, name: 'Kumar', position: 'Developer', email: 'kumar@123', image: Profile2 },
    { id: 3, name: 'Divya', position: 'Tester', email: 'divya@123', image: Profile4 },
    { id: 4, name: 'John', position: 'Admin', email: 'john@123', image: Profile3 },
    { id: 5, name: 'Rajesh', position: 'Developer', email: 'rajeshnair@123', image: Profile6 },
    { id: 6, name: 'Anika', position: 'Tester', email: 'anikaraj@123', image: Profile5 },
    { id: 7, name: 'Priya', position: 'HR', email: 'priya@123', image: Profile },
    { id: 8, name: 'Priya', position: 'HR', email: 'priya@123', image: Profile },
  ]);
  const [editId, setEditId] = useState(null);
  const [editedUser, setEditedUser] = useState({ name: '', email: '', position: '' });

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', position: '', image: Profile });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployeData(employeData.filter((user) => user.id !== id));
    }
  };

  const handleEditClick = (user) => {
    setEditedUser({ name:  user.name, email: user.email, position: user.position });
    setEditId(user.id);
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

  const handleCreateChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateSubmit = () => {
    if (!newUser.name || !newUser.position || !newUser.email) {
      alert("Please fill all fields.");
      return;
    }

    const newEmp = {
      ...newUser,
      id: Date.now(),
    };

    setEmployeData([...employeData, newEmp]);
    setNewUser({ name: '', email: '', position: '', image: Profile });
    setShowCreateForm(false);
  };

  return (
    <div className="container py-4">
      <button className='btn btn-primary mb-3' onClick={() => setShowCreateForm(!showCreateForm)}>
        {showCreateForm ? "Close" : "Create"}
      </button>

      {showCreateForm && (
        <div className="card p-3 mb-4">
          <h5 className="mb-3">Create New Employee</h5>
          <div className="mb-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newUser.name}
              onChange={handleCreateChange}
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={newUser.position}
              onChange={handleCreateChange}
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={newUser.email}
              onChange={handleCreateChange}
              className="form-control"
            />
          </div>
          <button className="btn btn-success" onClick={handleCreateSubmit}>
            Add Employee
          </button>
        </div>
      )}

      <div className="row g-4">
        {employeData.map((user) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={user.id}>
            <div className="card shadow-sm h-100 p-3">
              <div className="d-flex align-items-center mb-3">
                <img
                  src={user.image}
                  alt="Profile"
                  style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                />
                <div className="ms-4">
                  {editId === user.id ? (
                    <>
                      <input
                        type="text"
                        name="name"
                        value={editedUser.name}
                        onChange={handleInputChange}
                        className="form-control mb-1"
                      />
                      <input
                        type="text"
                        name="position"
                        value={editedUser.position}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </>
                  ) : (
                    <>
                      <h6 className="mb-0">{user.name}</h6>
                      <p className="text-muted mb-0">{user.position}</p>
                    </>
                  )}
                </div>
              </div>
              {editId === user.id ? (
                <input
                  type="text"
                  name="email"
                  value={editedUser.email}
                  onChange={handleInputChange}
                  className="form-control mb-2"
                />
              ) : (
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
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

export default Employe;
