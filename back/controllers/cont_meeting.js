const MeetingModel = require('../models/meeting');

const createMeeting = async (meetingData) => {
  const meeting = new MeetingModel;
  meeting.title = meetingData.title;
  meeting.speaker = meetingData.speaker;
  meeting.description = meetingData.description;
  meeting.tags = meetingData.tags;
  meeting.avatar = meetingData.avatar;
  meeting.startDate = meetingData.startDate;
  meeting.status = 'soon';
  const doc = await meeting.save();
  console.log(doc._id);
  return doc;
};
const getMeetings = async() => {
  const meeting = await MeetingModel.find({ status: {$in:['soon', 'active']}}, {$sort: {startDate: 1}} );
  console.log("CHECK meeting BY EMAIL", meeting);
  return meeting;
}; 
const findmeetingById = async(id) => {
  const meeting = await MeetingModel.findOne({id});
  return meeting;
}



module.exports = {
  createMeeting,
  getMeetings,
};
