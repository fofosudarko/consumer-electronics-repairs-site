// collection.js
/*global Set*/

import round from 'lodash.round';

import { SortOrder } from 'src/config/enums';

function prependItemToCollection({ collection = [], item = {} }) {
  if (!collection || !Array.isArray(collection)) {
    return [];
  }

  if (Object.isFrozen(collection)) {
    collection = [item, ...collection];
  } else {
    collection.unshift(item);
  }

  return collection;
}

function prependItemsToCollection({ collection = [], items = [] }) {
  if (!collection || !Array.isArray(collection)) {
    return [];
  }

  if (Object.isFrozen(collection)) {
    collection = [...items, ...collection];
  } else {
    collection = [...items, ...collection];
  }

  return collection;
}

function appendItemToCollection({ collection = [], item = {} }) {
  if (!collection || !Array.isArray(collection)) {
    return [];
  }

  if (Object.isFrozen(collection)) {
    collection = [...collection, item];
  } else {
    collection.push(item);
  }

  return collection;
}

function appendItemsToCollection({ collection = [], items = [] }) {
  if (!collection || !Array.isArray(collection)) {
    return [];
  }

  if (Object.isFrozen(collection)) {
    collection = [...collection, ...items];
  } else {
    collection = [...collection, ...items];
  }

  return collection;
}

function updateItemInCollection({
  collection = [],
  item = {},
  property = 'id',
}) {
  if (!collection || !Array.isArray(collection)) {
    return [];
  }

  const itemIndex = collection.findIndex((i) => i[property] === item[property]);

  if (itemIndex === -1) {
    return collection;
  }

  if (Object.isFrozen(collection)) {
    collection = Array.from(collection);
  }

  collection.splice(itemIndex, 1, item);

  return collection;
}

function updateItemsInCollection({
  collection = [],
  items = [],
  property = 'id',
}) {
  if (!collection || !Array.isArray(collection)) {
    return [];
  }

  if (Object.isFrozen(collection)) {
    collection = Array.from(collection);
  }

  for (const item of items) {
    const itemIndex = collection.findIndex(
      (i) => i[property] === item[property]
    );
    if (itemIndex === -1) {
      continue;
    }
    collection.splice(itemIndex, 1, item);
  }

  return collection;
}

function listItemsInCollection({ collection = [], items = [] }) {
  if (!collection || !Array.isArray(collection)) {
    return items;
  }

  return [...collection, ...items];
}

function upsertItemInCollection({
  collection = [],
  item = {},
  property = 'id',
  operation = 'PREPEND_ITEM',
}) {
  if (!collection || !Array.isArray(collection)) {
    return [];
  }

  if (!['PREPEND_ITEM', 'APPEND_ITEM'].includes(operation)) {
    throw new Error(
      'Operation unknown. Must be either PREPEND_ITEM or APPEND_ITEM'
    );
  }

  const itemIndex = collection.findIndex((i) => i[property] === item[property]);

  if (itemIndex === -1) {
    if (operation === 'PREPEND_ITEM') {
      return prependItemToCollection({ collection, item });
    } else {
      return appendItemToCollection({ collection, item });
    }
  }

  if (Object.isFrozen(collection)) {
    collection = Array.from(collection);
  }

  collection.splice(itemIndex, 1, item);

  return collection;
}

function removeItemFromCollection({
  collection = [],
  item = {},
  property = 'id',
}) {
  return item
    ? collection.filter((i) => i[property] !== item[property])
    : collection;
}

function removeItemsFromCollection({
  collection = [],
  items = [],
  property = 'id',
}) {
  return findDifferenceInObjectCollections({
    firstCollection: collection,
    secondCollection: items,
    property,
  });
}

function sortItemsInCollection({
  collection = [],
  property = 'id',
  sortOrder = SortOrder.ASCENDING,
}) {
  let sortFn;

  switch (sortOrder) {
    case SortOrder.ASCENDING:
      sortFn = (a, b) =>
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      break;
    case SortOrder.DESCENDING:
      sortFn = (a, b) =>
        a[property] < b[property] ? 1 : a[property] > b[property] ? -1 : 0;
      break;
  }

  return [...collection].sort(sortFn);
}

function getItemInCollection({ collection = [], item = {}, property = 'id' }) {
  if (!collection || !Array.isArray(collection)) {
    return item;
  }

  return collection.find((i) => i[property] === item[property]) ?? null;
}

function reduceObjectPropsInCollection({
  collection = [],
  operation = 'adder',
  property = 'id',
}) {
  if (!collection || !collection.length) {
    return 0;
  }

  const filteredCollection = collection.filter(
    (item) => item !== undefined && item !== null
  );

  if (!filteredCollection || !filteredCollection.length) {
    return 0;
  }

  let fn;

  switch (operation) {
    case 'adder':
      fn = (acc, x) => acc + x;
      break;
    case 'subtractor':
      fn = (acc, x) => acc - x;
      break;
    case 'multiplier':
      fn = (acc, x) => acc * x;
      break;
    default:
      fn = (acc, x) => acc + x;
  }

  return round(filteredCollection.map((item) => item[property]).reduce(fn), 2);
}

function reduceVariableItemsList(list) {
  if (!list || !Array.isArray(list) || !list.length) {
    return null;
  }

  return list.reduce((acc, x) => {
    const value = { [x.key]: x.value };
    return { ...acc, ...value };
  }, {});
}

function generateVariableItemsList(obj) {
  const list = [];

  if (!obj || !('keys' in obj) || !('items' in obj)) {
    return list;
  }

  const keys = obj.keys,
    items = obj.items;

  if (!Array.isArray(keys) || typeof items !== 'object') {
    return list;
  }

  keys.forEach((item) => {
    list.push({ key: item, value: items[item] });
  });

  return list;
}

function findIntersectionOfObjectCollections({
  firstCollection = null,
  secondCollection = null,
  property = 'id',
}) {
  if (!Array.isArray(firstCollection) && Array.isArray(secondCollection)) {
    return secondCollection;
  } else if (
    !Array.isArray(secondCollection) &&
    Array.isArray(firstCollection)
  ) {
    return firstCollection;
  }
  const firstCollectionSet = new Set(
    firstCollection.map((item) => item[property])
  );
  const secondCollectionSet = new Set(
    secondCollection.map((item) => item[property])
  );
  const intersection = [
    ...[...firstCollectionSet].filter((item) => secondCollectionSet.has(item)),
  ];
  return firstCollection.filter((item) =>
    intersection.includes(item[property])
  );
}

function findDifferenceInObjectCollections({
  firstCollection = null,
  secondCollection = null,
  property = 'id',
}) {
  if (!Array.isArray(firstCollection) && Array.isArray(secondCollection)) {
    return secondCollection;
  } else if (
    !Array.isArray(secondCollection) &&
    Array.isArray(firstCollection)
  ) {
    return firstCollection;
  }
  const firstCollectionSet = new Set(
    firstCollection.map((item) => item[property])
  );
  const secondCollectionSet = new Set(
    secondCollection.map((item) => item[property])
  );
  const difference = [
    ...[...firstCollectionSet].filter((item) => !secondCollectionSet.has(item)),
  ];
  return firstCollection.filter((item) => difference.includes(item[property]));
}

function createCollectionSet({ collection = null, property = 'id' }) {
  if (!Array.isArray(collection)) {
    return collection;
  }
  const values = [...new Set(collection.map((item) => item[property]))];
  const newCollection = [];
  values.forEach((value) => {
    const item = collection.find((i) => i[property] === value);
    if (item) {
      newCollection.push(item);
    }
  });
  return newCollection;
}

export {
  prependItemToCollection,
  appendItemToCollection,
  removeItemFromCollection,
  updateItemInCollection,
  reduceObjectPropsInCollection,
  reduceVariableItemsList,
  generateVariableItemsList,
  getItemInCollection,
  upsertItemInCollection,
  prependItemsToCollection,
  appendItemsToCollection,
  updateItemsInCollection,
  listItemsInCollection,
  findIntersectionOfObjectCollections,
  findDifferenceInObjectCollections,
  createCollectionSet,
  removeItemsFromCollection,
  sortItemsInCollection,
};
