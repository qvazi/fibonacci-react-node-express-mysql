module.exports = {
  getIPv4(req) {
    return req.ip.split(':').pop();
  },
};
