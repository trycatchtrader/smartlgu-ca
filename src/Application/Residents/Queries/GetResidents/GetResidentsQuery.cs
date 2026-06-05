using SmartLGU.Application.Residents.Dtos;
using SmartLGU.Application.Residents.Services;

namespace SmartLGU.Application.Residents.Queries.GetResidents;

public record GetResidentsQuery(string? Search, string? Barangay, string? Status) : IRequest<IReadOnlyCollection<ResidentDto>>;

public class GetResidentsQueryHandler(IResidentDataProvider residentDataProvider) : IRequestHandler<GetResidentsQuery, IReadOnlyCollection<ResidentDto>>
{
    public async Task<IReadOnlyCollection<ResidentDto>> Handle(GetResidentsQuery request, CancellationToken cancellationToken)
    {
        var residents = await residentDataProvider.GetResidentsAsync(cancellationToken);
        var query = residents.AsEnumerable();

        if (!string.IsNullOrWhiteSpace(request.Search))
        {
            query = query.Where(resident =>
                resident.FullName.Contains(request.Search, StringComparison.OrdinalIgnoreCase) ||
                resident.ResidentNumber.Contains(request.Search, StringComparison.OrdinalIgnoreCase) ||
                resident.Address.Contains(request.Search, StringComparison.OrdinalIgnoreCase));
        }

        if (!string.IsNullOrWhiteSpace(request.Barangay))
        {
            query = query.Where(resident => resident.Barangay.Equals(request.Barangay, StringComparison.OrdinalIgnoreCase));
        }

        if (!string.IsNullOrWhiteSpace(request.Status))
        {
            query = query.Where(resident => resident.Status.ToString().Equals(request.Status, StringComparison.OrdinalIgnoreCase));
        }

        return query.OrderByDescending(resident => resident.RegisteredAt).ToList();
    }
}
