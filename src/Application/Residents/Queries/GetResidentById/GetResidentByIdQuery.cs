using SmartLGU.Application.Residents.Dtos;
using SmartLGU.Application.Residents.Services;

namespace SmartLGU.Application.Residents.Queries.GetResidentById;

public record GetResidentByIdQuery(int Id) : IRequest<ResidentDto?>;

public class GetResidentByIdQueryHandler(IResidentDataProvider residentDataProvider) : IRequestHandler<GetResidentByIdQuery, ResidentDto?>
{
    public Task<ResidentDto?> Handle(GetResidentByIdQuery request, CancellationToken cancellationToken) =>
        residentDataProvider.GetResidentByIdAsync(request.Id, cancellationToken);
}
