import {List, Map} from 'immutable';

//http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html

export const INITIAL_STATE = Map();

export function setURL(state, urlEntry) {
    // Set the URL
    return state.set('url', urlEntry);
}

function getData(stuff) {
  if (!stuff) return [];
  const url = vote.get('url');
  const aVotes = vote.getIn(['tally', a], 0);
  const bVotes = vote.getIn(['tally', b], 0);
  if      (aVotes > bVotes)  return [a];
  else if (aVotes < bVotes)  return [b];
  else                       return [a, b];
}

export function next(state) {
  const entries = state.get('entries')
                       .concat(getWinners(state.get('vote')));
  if (entries.size === 1) {
    return state.remove('vote')
                .remove('entries')
                .set('winner', entries.first());
  } else {
    return state.merge({
      vote: Map({pair: entries.take(2)}),
      entries: entries.skip(2)
    });
  }
}

export function vote(state, entry) {
  return state.updateIn(
    ['tally', entry],
    0,
    tally => tally + 1
  );
}
