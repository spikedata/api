exports.add_id = function(transactions) {
  let result = [];
  for (let i = 0; i < transactions.length; i++) {
    let trans = transactions[i];
    trans.id = i + 1;
    result.push(trans);
    if (!Array.isArray(trans.description)) {
      trans.description = [trans.description];
    }
  }
  return result;
};

exports.remove_id = function(transactions) {
  for (let t of transactions) {
    delete t.id;
  }
};

exports.validate = function(requestId, transactions, filename) {
  if (!transactions.length) {
    // NOTE: this fatal will fire on /pdf as well as /transactions requests when:
    //  /pdf = statement has no transactions (is probably an error)
    //  /transactions = account has no transactions over the selected period
    //    - e.g. NED test account was frozen from March so no transactions in past 90-days as of June)
    //    - This can usually be ignored
    log.fatal(`${filename}: no transaction data`);
    return { valid: false };
  }

  let breaks = [];
  let valid = true;
  for (let i = 1; i < transactions.length; i++) {
    let trans_prev = transactions[i - 1];
    let trans_cur = transactions[i];
    if (!trans_cur.description.length) {
      log.fatal(`${filename}: No description found for the transaction`);
      valid = false;
    }
    if (!trans_prev.balance) trans_prev.balance = 0;
    if (!trans_cur.balance) trans_cur.balance = 0;
    if (!trans_cur.amount) trans_cur.amount = 0;
    if (Math.abs(trans_cur.amount) > 10000000.0) {
      log.fatal(`${filename}: transaction amount exceeds (+/-) R 10,000,000.00`);
      valid = false;
    }
    let validation = {
      prev_id: i,
      cur_id: i + 1,
      prev_date: trans_prev.date,
      cur_date: trans_cur.date,
      amount: trans_cur.amount,
      diff: trans_cur.balance - (trans_prev.balance + trans_cur.amount),
    };
    if (Math.abs(validation.diff) > 0.001) {
      breaks.push(validation);
    }
  }

  if (breaks.length > 0) {
    log.error("transactions validation breaks detected", JSON.stringify(breaks, null, 2));
    // log.alert(log.AlertLevel.Warn, "transactions validation breaks detected");
    valid = false;
  }
  return { breaks, valid };
};
