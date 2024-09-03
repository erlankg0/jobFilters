export const selectorAllPositions = (state) => state.position;

export const selectVisiblePositions = (state, filters = []) => {
    if (filters.length === 0) return state.position;

    return state.position.filter(position => {
        const positionFilter = [].concat(position.role, position.level, ...position.languages, ...position.tools);

        return filters.every(filter => positionFilter.includes(filter))
    })
}