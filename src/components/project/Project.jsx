import React, { useState } from 'react';
import Profile from "../../assets/profile1.png";
import Profile4 from "../../assets/profile4.png";
import Profile5 from "../../assets/profile5.png";
import Profile2 from "../../assets/profile2.png";
import Profile3 from "../../assets/profile3.png";
import Profile6 from "../../assets/profile6.png";

const Project = () => {
  const [data, setData] = useState([
    { id: 1, title: 'WebApp', description: 'Creating a web app', start: '10.01.24', end: '20.02.25', logo: Profile },
    { id: 2, title: 'MobApp', description: 'Creating a mobile app', start: '02.01.24', end: '11.12.25', logo: Profile2 },
    { id: 3, title: 'Tracker', description: 'Tracking system', start: '31.01.24', end: '19.02.25', logo: Profile3 },
    { id: 4, title: 'BMI Calculator', description: 'Health project', start: '10.01.24', end: '20.02.25', logo: Profile4 },
    { id: 5, title: 'Shoe Shop', description: 'E-commerce site', start: '01.06.24', end: '23.12.25', logo: Profile5 },
    { id: 6, title: 'TechVoice', description: 'Tech blog', start: '30.12.24', end: '12.05.25', logo: Profile6 },
    { id: 7, title: 'Mobile App', description: 'Flutter based app', start: '13.11.24', end: '16.06.25', logo: Profile5 },
    { id: 8, title: 'Web Platform', description: 'Fullstack project', start: '11.11.24', end: '30.02.25', logo: Profile2 },
  ]);

  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ title: '', description: '', start: '', end: '' });
  const [newData, setNewData] = useState({ title: '', description: '', start: '', end: '', logo: Profile });

  const handleDelete = (id) => {
    setData(data.filter((user) => user.id !== id));
  };

  const handleEdit = (user) => {
    setEditId(user.id);
    setEditData({
      title: user.title,
      description: user.description,
      start: user.start,
      end: user.end
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (id) => {
    const updated = data.map((user) =>
      user.id === id ? { ...user, ...editData } : user
    );
    setData(updated);
    setEditId(null);
  };

  const handleCancel = () => {
    setEditId(null);
  };

  const handleCreateChange = (e) => {
    const { name, value } = e.target;
    setNewData(prev => ({ ...prev, [name]: value }));
  };

  const handleCreate = () => {
    if (!newData.title || !newData.description || !newData.start || !newData.end) {
      alert("All fields are required");
      return;
    }

    const newProject = {
      ...newData,
      id: data.length + 1,
      logo: newData.logo || Profile
    };
    setData(prev => [...prev, newProject]);
    setNewData({ title: '', description: '', start: '', end: '', logo: Profile });
  };

  return (
    <div className="container py-4">
      {/* Create Project Form */}
      <div className="card p-3 mb-4">
        <h5 className="mb-3">Create New Project</h5>
        <div className="row g-2">
          <div className="col-sm-6 col-md-3">
            <input
              type="text"
              name="title"
              value={newData.title}
              onChange={handleCreateChange}
              placeholder="Project Title"
              className="form-control"
            />
          </div>
          <div className="col-sm-6 col-md-3">
            <input
              type="text"
              name="description"
              value={newData.description}
              onChange={handleCreateChange}
              placeholder="Project Description"
              className="form-control"
            />
          </div>
          <div className="col-sm-6 col-md-3">
            <input
              type="text"
              name="start"
              value={newData.start}
              onChange={handleCreateChange}
              placeholder="Start Date"
              className="form-control"
            />
          </div>
          <div className="col-sm-6 col-md-3">
            <input
              type="text"
              name="end"
              value={newData.end}
              onChange={handleCreateChange}
              placeholder="End Date"
              className="form-control"
            />
          </div>
        </div>
        <div className="mt-3 text-end">
          <button className="btn btn-primary" onClick={handleCreate}>Add Project</button>
        </div>
      </div>

      {/* Project Cards */}
      <div className="row g-4">
        {data.map((user) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={user.id}>
            <div className="card shadow-sm h-100 p-3 d-flex flex-column justify-content-between">
              <div className="text-center mb-3">
                <img
                  src={user.logo}
                  alt="Logo"
                  style={{ width: '60px', height: '60px', borderRadius: '50%' }}
                />
              </div>
              <div className="mb-2">
                {editId === user.id ? (
                  <input
                    type="text"
                    name="title"
                    className="form-control mb-2"
                    value={editData.title}
                    onChange={handleChange}
                    placeholder="Title"
                  />
                ) : (
                  <h5>{user.title}</h5>
                )}
                {editId === user.id ? (
                  <textarea
                    name="description"
                    className="form-control mb-2"
                    value={editData.description}
                    onChange={handleChange}
                    placeholder="Description"
                  />
                ) : (
                  <p>{user.description}</p>
                )}
                {editId === user.id ? (
                  <>
                    <input
                      type="text"
                      name="start"
                      className="form-control mb-2"
                      value={editData.start}
                      onChange={handleChange}
                      placeholder="Start Date"
                    />
                    <input
                      type="text"
                      name="end"
                      className="form-control mb-2"
                      value={editData.end}
                      onChange={handleChange}
                      placeholder="End Date"
                    />
                  </>
                ) : (
                  <>
                    <p><strong>Start:</strong> {user.start}</p>
                    <p><strong>End:</strong> {user.end}</p>
                  </>
                )}
              </div>
              <div className="d-flex justify-content-between mt-2">
                {editId === user.id ? (
                  <>
                    <button className="btn btn-outline-primary btn-sm" onClick={() => handleSave(user.id)}>Save</button>
                    <button className="btn btn-outline-secondary btn-sm" onClick={handleCancel}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="btn btn-outline-success btn-sm" onClick={() => handleEdit(user)}>Edit</button>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(user.id)}>Delete</button>
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

export default Project;
